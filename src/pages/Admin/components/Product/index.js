import React, { useState, useEffect, useRef } from 'react'
import ManageProduct from './ManageProduct'
import AddProduct from './AddProduct'

import Eye from '../../../../assets/img/admin/eye.svg'
import Pencil from '../../../../assets/img/admin/pencil.svg'
import Sampah from '../../../../assets/img/admin/sampah.svg'

import Right from '../../../../assets/img/admin/right.svg'

export default function Product() {
  const [arrays, setArrays] = useState([])
  const [Active, setActive] = useState(0)
  const pageNumbers = []

  const [currentPage, setcurrentPage] = useState(1)
  const [postPerPage] = useState(5)

  const indexOfLastPost /*10*/ = currentPage /*1*/ * postPerPage /*10*/
  const indexOfFirstPage /*0*/ = indexOfLastPost /*10*/ - postPerPage /*10*/
  const currentPosts /*10*/ = arrays.slice(
    indexOfFirstPage /*0*/,
    indexOfLastPost /*10*/,
  )

  for (let i = 1; i <= Math.ceil(arrays.length / postPerPage); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber, i, pageNumbers, Active) => {
    return setcurrentPage(pageNumber), setActive(i), console.log('i', i)
  }

  const nextPrev = () => {
    if (currentPage === 1) {
      setcurrentPage(1)
    } else {
      setcurrentPage(currentPage - 1)
    }
    // return (
    //   <div className="p-3 rounded bg-green-500">
    //     <img src={Left} />
    //   </div>
    // )
  }
  const ref = useRef()

  const [filter, setFilter] = useState([])

  //deklarasi state untuk search
  const [searchTerm, setSearchTerm] = useState('')

  const [error, setError] = useState('')

  const [update, setUpdate] = useState(false)

  const [data, setdata] = useState({
    key: 0,
    nama: '',
    category: '',
    search: '',
  })

  // delete

  const Delete = (key) => {
    let arr = arrays.filter((items) => {
      return items.key !== key
    })

    setArrays(arr)
  }

  const Edit = (key, nama, category) => {
    setUpdate(true)
    setdata({ ...data, key: key, nama: nama, category: category })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (data.key !== 0) {
      let arr = arrays.filter((items) => {
        return items.key === data.key
      })

      let [{ key }] = arr
      let arrNew = arrays.filter((items) => {
        return items.key !== key
      })

      arrNew.push({
        key: (data.key = 0),
        nama: data.nama,
        category: data.category,
      })
      setArrays(arrNew)
      ref.current = arrNew
    } else {
      if (data.nama.length < 3) {
        setError('field minimal 3 karakter')
      } else {
        setError('')
        let arr = [...arrays]
        arr.push({
          key: Math.random(),
          nama: data.nama,
          category: data.category,
        })

        setArrays(arr)
        ref.current = arr
      }
    }
  }

  const handleChange = (event) => {
    let targetName = event.target.name
    if (targetName === 'search') {
      setSearchTerm(event.target.value)
      if (event.target.value === '') {
        setArrays(ref.current)
      }
    } else {
      setdata({ ...data, [event.target.name]: event.target.value })
    }
  }

  useEffect(() => {
    const results = arrays.filter((data) =>
      data.nama.toLowerCase().includes(searchTerm),
    )

    setArrays(results)
  }, [searchTerm])

  return (
    <div className="flex">
      {/* <ManageProduct datas={data} /> */}

      <ManageProduct
        onChange={handleChange}
        searchvalue={searchTerm}
        // searchvalue={searchTerm}
        dataBody={currentPosts.map((data, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.nama}</td>
              <td>{data.category}</td>
              <td>
                <div className="flex items-center">
                  <button>
                    <img src={Eye} />
                  </button>
                  <button
                    onClick={() => Edit(data.key, data.nama, data.category)}
                  >
                    {/* btn edit */}
                    <img className="px-5" src={Pencil} />
                  </button>
                  <button>
                    {/* btn delete */}
                    <img src={Sampah} onClick={() => Delete(data.key)} />
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
        handlePrev={nextPrev}
        numbering={
          <nav aria-label="">
            <ul className="pagination flex">
              {console.log('active', Active)}
              {pageNumbers.map((number, i) => {
                return (
                  <li
                    onClick={() => paginate(number, i, pageNumbers, Active)}
                    key={number}
                    className={
                      Active === i
                        ? 'ml-4  text-xl cursor-pointer bg-green-500 p-2 text-white rounded'
                        : 'ml-4 text-gray-400 text-xl cursor-pointer hover:bg-green-500 p-2 hover:text-white rounded'
                    }
                  >
                    <a
                      // href="!#"
                      className="page-link "
                    >
                      {number}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        }
        nextPage={
          <div className="p-3 rounded bg-green-500 ml-4">
            <img src={Right} />
          </div>
        }
      />

      <AddProduct
        handleSubmit={handleSubmit}
        valuename={data.nama}
        valuekey={data.key}
        valuecategory={data.category}
        handleChange={handleChange}
        dataerror={error}
        update={update}
        namesearch="search"
      />
    </div>
  )
}
