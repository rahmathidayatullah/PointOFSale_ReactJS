import React, { useState } from 'react'
import Plus from '../../../assets/img/admin/add.svg'

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { rules } from './validation'
import { createCategory } from '../../../api/categories'
import { fetchCategory } from '../../../features/Category/action'

import { editCategory } from '../../../api/categories'
const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  errors: 'errors',
}

export default function AddCategory(props) {
  let dispatch = useDispatch()
  const id = useSelector((state) => state.category.datasingle._id)

  const [status, setStatus] = useState(statuslist.idle)
  let category = useSelector((state) => state.category.datasingle.name)

  let check = props.status

  let { register, handleSubmit, errors, setErrors } = useForm()

  const onSubmit = async (formData) => {
    setStatus(statuslist.process)

    let { data } = await createCategory(formData)

    setStatus(statuslist.success)
    dispatch(fetchCategory())
  }

  const onPut = async (formData) => {
    let { data } = await editCategory(id, formData)
    setStatus(statuslist.success)
    dispatch(fetchCategory())
  }

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Add<span className="font-normal ml-2">Category</span>
        </p>
      </div>
      <form
        onSubmit={check === true ? handleSubmit(onPut) : handleSubmit(onSubmit)}
      >
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="Category Name"
          name="name"
          ref={register(rules.category)}
          value={props.valCat}
          onChange={props.onChange}
          // defaultValue={category}
        />
        <button className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md">
          <img src={Plus} />
          {check === true ? (
            <p className="font-bold text-md pl-3">Edit Category</p>
          ) : (
            <p className="font-bold text-md pl-3">Add Category</p>
          )}
        </button>
      </form>
    </div>
  )
}
