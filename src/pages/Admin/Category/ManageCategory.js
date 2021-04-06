import React from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'
import Pencil from '../../../assets/img/admin/pencil.svg'
import Sampah from '../../../assets/img/admin/sampah.svg'
import { Pagination } from 'upkit'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchCategory,
  fetchSingleCategory,
  setKeyword,
  setLimit,
  setPage,
  goToNextPage,
  goToPrevPage,
} from '../../../features/Category/action'
import { deleteCategory } from '../../../api/categories'

export default function ManageCategory() {
  let dispatch = useDispatch()
  let dataAllCategory = useSelector((state) => state.category.data)
  let dataAllSearch = useSelector((state) => state.category)
  let status = useSelector((state) => state.category.status)

  const handleEdit = (item) => {
    console.log(item)
    dispatch(fetchSingleCategory(item))
  }

  const handleDelete = (id) => {
    // console.log(id)
    dispatch(deleteCategory(id))
    dispatch(fetchCategory())
  }

  React.useEffect(() => {
    dispatch(fetchCategory())
  }, [
    dispatch,
    dataAllSearch.keyword,
    dataAllSearch.limit,
    dataAllSearch.currentPage,
    dataAllSearch.perPage,
  ])

  const Title = ['No', 'Nama Category', 'Action']
  const HeadTable = Title.map((itemTitle) => (
    <th key={itemTitle}>{itemTitle}</th>
  ))

  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Category<span className="font-normal ml-2">Manage</span>
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
        {/* select entries */}
        <div className="relative w-40 flex items-center">
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

        {/* search */}
        <div className="relative w-48 flex items-center p-3">
          <input
            className="absolute p-2 border border-gray-200 left-0 rounded focus:outline-none"
            placeholder="Search Category"
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
            ? dataAllCategory.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>

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
