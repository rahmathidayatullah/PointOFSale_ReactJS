import React from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'
import Edit from '../../../assets/img/admin/pencil.svg'
import Delete from '../../../assets/img/admin/sampah.svg'
import {
  fetchVariant,
  fetchSingleVariant,
  setKeyword,
  setLimit,
  setPage,
  goToNextPage,
  goToPrevPage,
} from '../../../features/Variant/action'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVariant, getAllVariant } from '../../../api/variants'
import { Pagination } from 'upkit'
export default function ManageVariant() {
  let dispatch = useDispatch()
  let dataAllVariant = useSelector((state) => state.variant.data)
  // let dataAllVariant = useSelector((state) => state.variant)
  console.log('dataAllVariant', dataAllVariant)
  let dataAllSearch = useSelector((state) => state.variant)
  let status = useSelector((state) => state.variant.status)

  const handleEdit = (item) => {
    // console.log(item)
    dispatch(fetchSingleVariant(item))
  }

  const handleDelete = (id) => {
    // console.log(id)
    dispatch(deleteVariant(id))
    dispatch(fetchVariant())
  }

  React.useEffect(() => {
    dispatch(fetchVariant())
  }, [])

  React.useEffect(() => {
    console.log('useeffect managae')
    dispatch(fetchVariant())
  }, [
    dispatch,
    dataAllSearch.keyword,
    dataAllSearch.limit,
    dataAllSearch.currentPage,
    dataAllSearch.perPage,
  ])

  const Title = ['No', 'Variant Name', 'Size , Stock', 'Action']
  const HeadTable = Title.map((itemTitle) => (
    <th key={itemTitle}>{itemTitle}</th>
  ))

  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Variants<span className="font-normal ml-2">Manage</span>
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
            placeholder="Search Variant"
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
            ? dataAllVariant.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      {item.option.map((dataa) => {
                        return (
                          <div className="flex">
                            <p className="w-1/2">{dataa.name}</p>
                            <p className="w-1/2">{dataa.stock}</p>
                          </div>
                        )
                      })}
                    </td>
                    <td>
                      <div className="flex items-center">
                        <button
                          className="w-16 h-10"
                          onClick={() => {
                            handleEdit(item)
                          }}
                        >
                          <img className="px-5" src={Edit} />
                        </button>
                        <button onClick={() => handleDelete(item._id)}>
                          <img src={Delete} />
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
