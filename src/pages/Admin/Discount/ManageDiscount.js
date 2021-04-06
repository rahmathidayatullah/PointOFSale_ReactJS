import React, { useState } from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'
import Pencil from '../../../assets/img/admin/pencil.svg'
import Sampah from '../../../assets/img/admin/sampah.svg'
import { Pagination } from 'upkit'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchDiscount,
  fetchSingleDiscount,
  setKeyword,
  setLimit,
  setPage,
  goToNextPage,
  goToPrevPage,
  changeFormDiscount,
  changeFormDiscountToProduct,
} from '../../../features/Discount/action'
import { addProductToDiscount, deleteDiscount } from '../../../api/discount'
import { fetchProduct } from '../../../features/Product/action'

export default function ManageDiscount() {
  let dispatch = useDispatch()
  let dataAllDiscount = useSelector((state) => state.discount.data)
  let dataAllSearch = useSelector((state) => state.discount)
  let status = useSelector((state) => state.discount.status)
  const [statusForm, setStatusForm] = useState('')
  const handleEdit = (item) => {
    console.log(item)
    dispatch(fetchSingleDiscount(item))
  }

  const handleDelete = (id) => {
    // console.log(id)
    dispatch(deleteDiscount(id))
    dispatch(fetchDiscount())
  }
  const Title = [
    'No',
    'Nama Diskon',
    'Status Diskon',
    'Jumlah Diskon',
    'Type Diskon',
    'Waktu berakhir diskon',
  ]
  const HeadTable = Title.map((item) => <th>{item}</th>)

  React.useEffect(() => {
    dispatch(fetchDiscount())
    setStatusForm(dataAllSearch.showform)
  }, [
    dispatch,
    dataAllSearch.keyword,
    dataAllSearch.limit,
    dataAllSearch.currentPage,
    dataAllSearch.perPage,
    dataAllSearch.showform,
  ])
  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Diskon<span className="font-normal ml-2">Manage</span>
        </p>
      </div>
      <div className="flex items-center mt-8 w-full justify-between">
        {/* select entries */}
        <div className="relative flex items-center">
          <div className="flex items-center relative w-40">
            <select
              className="absolute left-0 py-2 pl-4 pr-8 text-white font-bold bg-green-500 appearance-none rounded focus:outline-none"
              value={dataAllSearch.limit}
              onChange={(e) => {
                dispatch(setLimit(e.target.value))
              }}
            >
              <option>Show & entries</option>
              <option value="1">Show 1</option>
              <option value="2">Show 2</option>
              <option value="5">Show 5</option>
            </select>
            <img
              className="right-1 absolute z-10 RealtiveCenterY pointer-events-none"
              src={IconDown}
            />
          </div>

          {statusForm === 'add product' ? (
            <button
              className="ml-3 p-2 bg-green-500 text-white focus:outline-none whitespace-nowrap items-center rounded-md font-bold"
              onClick={() => dispatch(changeFormDiscount())}
            >
              Add Discount To Product
            </button>
          ) : (
            <button
              className="ml-3 p-2 bg-green-500 text-white focus:outline-none whitespace-nowrap items-center rounded-md font-bold"
              onClick={() => dispatch(changeFormDiscountToProduct())}
            >
              Add Discount
            </button>
          )}
        </div>
        {/* search */}
        <div className="relative w-48 flex items-center p-3">
          <input
            className="absolute p-2 border border-gray-200 left-0 rounded focus:outline-none"
            placeholder="Search Diskon"
            name="search"
            value={dataAllSearch.keyword}
            onChange={(e) => {
              dispatch(setKeyword(e.target.value))
            }}
          />
          <img className="RealtiveCenterY right-2 z-10" src={Search} />
        </div>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>{HeadTable}</tr>
        </thead>
        <tbody>
          {status === 'success'
            ? dataAllDiscount.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.status === 'y' ? 'Aktif' : 'Tidak Aktif'}</td>
                    <td>{item.value}</td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>

                    <td>
                      <div className="flex items-center">
                        <button
                          className="w-16 h-10"
                          onClick={() => {
                            handleEdit(item)
                          }}
                        >
                          <img className="px-5" src={Pencil} />
                        </button>
                        <button onClick={() => handleDelete(item._id)}>
                          <img src={Sampah} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })
            : 'Loading'}
          {console.log('dataAllDiscount', dataAllDiscount)}
        </tbody>
      </table>

      <div className="flex w-full justify-end mt-3">
        <Pagination
          totalItems={dataAllSearch.totalItems}
          page={dataAllSearch.currentPage}
          perPage={dataAllSearch.perPage}
          onChange={(page) => dispatch(setPage(page))}
          onNext={(_) => dispatch(goToNextPage())}
          onPrev={(_) => dispatch(goToPrevPage())}
        />
      </div>
    </div>
  )
}
