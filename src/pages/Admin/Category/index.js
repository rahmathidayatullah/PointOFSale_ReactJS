import React, { useState, useEffect } from 'react'
import AddCategory from './AddCategory'
import ManageCategory from './ManageCategory'
import { useDispatch, useSelector } from 'react-redux'
import Edit from '../../../assets/img/admin/pencil.svg'
import { deleteCategory } from '../../../api/categories'
import Delete from '../../../assets/img/admin/sampah.svg'
import {
  fetchCategory,
  getSinglecategory,
} from '../../../features/Category/action'

export default function Category(props) {
  const dispatch = useDispatch()
  let category = useSelector((state) => state.category)

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
        {
          console.log('items')
          console.log(items._id)
        }
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

  React.useEffect(() => {
    dispatch(fetchCategory())
  }, [])

  return (
    <div className="flex">
      <ManageCategory single content={content} />
      <AddCategory status={status} valCat={single} onChange={handleTest} />
    </div>
  )
}
