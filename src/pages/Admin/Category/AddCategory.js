import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchCategory,
  fetchEditCategory,
} from '../../../features/Category/action'
import { useForm } from 'react-hook-form'
import { createCategory } from '../../../api/categories'
import { rules } from './validation'

export default function AddCategory() {
  let dispatch = useDispatch()
  const { register, handleSubmit, errors, setErrors } = useForm()

  let category = useSelector((state) => state.category.datasingle)

  let categoryAll = useSelector((state) => state.variant)
  let idsingle = useSelector((state) => state.category.datasingle._id)
  let statusedit = useSelector((state) => state.category.statusedit)

  const onSubmit = async (data) => {
    let { datar } = await createCategory(data)
    dispatch(fetchCategory())
  }

  const onEdit = async (data) => {
    dispatch(fetchEditCategory(data, idsingle))
    dispatch(fetchCategory())
  }

  const [name, setname] = useState('')
  React.useEffect(() => {
    dispatch(fetchCategory())
    setname(category.name)
  }, [category])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {statusedit === 'add' ? 'ADD' : 'EDIT'}
          <span className="font-normal ml-2">Category</span>
        </p>
      </div>
      <form
        onSubmit={
          statusedit === 'add' ? handleSubmit(onSubmit) : handleSubmit(onEdit)
        }
      >
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="name"
          placeholder="Nama Category"
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          ref={register(rules.name)}
        />

        {errors.name?.message}

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
          type="submit"
        >
          {statusedit === 'add' ? 'ADD' : 'EDIT'}
          &nbsp; CATEGORY
        </button>
      </form>
    </div>
  )
}
