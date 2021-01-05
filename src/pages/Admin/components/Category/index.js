import React, { useState } from 'react'
import AddCategory from './AddCategory'
import ManageCategory from './ManageCategory'
import Eye from '../../../../assets/img/admin/eye.svg'
import Pencil from '../../../../assets/img/admin/pencil.svg'
import Sampah from '../../../../assets/img/admin/sampah.svg'

export default function Category() {
  const [array, setArray] = useState([])
  const [data, setdata] = useState({
    key: 0,
    category: '',
  })

  const Delete = (key) => {
    console.log('key', key)
    let arr = array.filter((items) => {
      return items.key !== key
    })

    setArray(arr)
  }

  const Edit = (key, category) => {
    setdata({ ...data, key: key, category: category })
  }

  function handleChange(event) {
    setdata({ ...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (data.key !== 0) {
      let arr = array.filter((items) => {
        return items.key === data.key
      })

      let [{ key }] = arr
      let arrNew = array.filter((items) => {
        return items.key !== key
      })

      arrNew.push({
        key: (data.key = 0),
        category: data.category,
      })
      setArray(arrNew)
    } else {
      let arr = [...array]
      arr.push({
        key: Math.random(),
        category: data.category,
      })

      setArray(arr)

      console.log('data terbaru', array)
    }
  }

  return (
    <div className="flex">
      <ManageCategory
        dataTbody={array.map((data, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.category}</td>
              <td>
                {' '}
                <div className="flex items-center">
                  <button>
                    <img src={Eye} />
                  </button>
                  <button onClick={() => Edit(data.key, data.category)}>
                    <img className="px-5" src={Pencil} />
                  </button>
                  <button onClick={() => Delete(data.key)}>
                    <img src={Sampah} />
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      />
      <AddCategory
        handleSubmit={handleSubmit}
        valuecategory={data.category}
        onChange={handleChange}
      />
    </div>
  )
}
