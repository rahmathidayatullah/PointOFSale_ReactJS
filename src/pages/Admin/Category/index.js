import React, { useState } from 'react'
import AddCategory from './AddCategory'
import { useForm } from 'react-hook-form'
import ManageCategory from './ManageCategory'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategory } from '../../../api/categories'
import Edit from '../../../assets/img/admin/pencil.svg'
import Delete from '../../../assets/img/admin/sampah.svg'
import {
  fetchCategory,
  getSinglecategory,
} from '../../../features/Category/action'
import { createCategory, editCategory } from '../../../api/categories'
import { rules } from './validation'
import Plus from '../../../assets/img/admin/add.svg'
export default function Category(props) {
  const dispatch = useDispatch()
  let category = useSelector((state) => state.category)
  const id = useSelector((state) => state.category.datasingle._id)
  const [single, setSingle] = useState('')

  const [status, setStatus] = useState(false)

  const handleDelete = (id) => {
    dispatch(deleteCategory(id))
    dispatch(fetchCategory())
  }

  const handleSingle = (item) => {
    dispatch(getSinglecategory(item))
    setSingle(item.name)
    setStatus(true)
  }

  const content = (
    <>
      {category.data.map((items, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{items.name}</td>
            <td className="flex items-center">
              <button className="mr-3" onClick={() => handleDelete(items._id)}>
                <img src={Delete} />
              </button>
              <button onClick={() => handleSingle(items)}>
                <img src={Edit} />
              </button>
            </td>
          </tr>
        )
      })}
    </>
  )

  const handleTest = (e) => {
    setSingle(e.target.value)
  }

  let { register, handleSubmit, errors, setErrors } = useForm()

  const onSubmit = async (formData) => {
    let { data } = await createCategory(formData)
    dispatch(fetchCategory())
  }

  const onPut = async (formData) => {
    let { data } = await editCategory(id, formData)
    console.log('formDataaaaa', formData)
    dispatch(fetchCategory())
    setStatus(false)
  }

  React.useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  return (
    <div className="flex">
      <ManageCategory content={content} />
      <AddCategory
        formSubmit={
          <form
            onSubmit={
              status === true ? handleSubmit(onPut) : handleSubmit(onSubmit)
            }
          >
            <input
              className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
              placeholder="Category Name"
              name="name"
              ref={register(rules.category)}
              value={single}
              onChange={handleTest}
              // defaultValue={category}
            />
            <button className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md">
              <img src={Plus} />
              {status === true ? (
                <p className="font-bold text-md pl-3">Edit Category</p>
              ) : (
                <p className="font-bold text-md pl-3">Add Category</p>
              )}
            </button>
          </form>
        }
        textTitle={status === true ? 'Edit' : 'Add'}
      />
    </div>
  )
}
