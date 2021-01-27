import React from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'
import Pencil from '../../../assets/img/admin/pencil.svg'
import Sampah from '../../../assets/img/admin/sampah.svg'
import { config } from '../../../config'

import { Pagination } from 'upkit'

import Right from '../../../assets/img/admin/right.svg'

import Left from '../../../assets/img/admin/left.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchProduct,
  fetchSingleProduct,
  setKeyword,
  setLimit,
  setPage,
  goToNextPage,
  goToPrevPage,
} from '../../../features/Product/action'
import { deleteProduct, getAllProducts } from '../../../api/products'
// import { getSingleProduct } from '../../../api/products'

export default function ManageProduct(props) {
  let dispatch = useDispatch()
  let dataAllProduct = useSelector((state) => state.product.data)
  let dataAllSearch = useSelector((state) => state.product)
  console.log('dataAllSearch', dataAllSearch)
  let status = useSelector((state) => state.product.status)
  console.log('dataAllProduct', dataAllProduct)
  const Title = ['No', 'Produk', 'Category', 'Variant', 'Image', 'Action']

  const HeadTable = Title.map((itemTitle) => (
    <th key={itemTitle}>{itemTitle}</th>
  ))

  const handleEdit = (item) => {
    console.log(item)
    dispatch(fetchSingleProduct(item))
  }

  const handleDelete = (id) => {
    // console.log(id)
    dispatch(deleteProduct(id))
    dispatch(fetchProduct())
  }

  React.useEffect(() => {
    dispatch(fetchProduct())
  }, [
    dispatch,
    dataAllSearch.keyword,
    dataAllSearch.limit,
    dataAllSearch.currentPage,
    dataAllSearch.perPage,
  ])

  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Product<span className="font-normal ml-2">Manage</span>
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
            placeholder="Search Product"
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
          <tr>
            {/* <th>No</th>
            <th>Nama</th>
            <th>Category</th>
            <th>Action</th> */}
            {HeadTable}
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className="flex items-center">
                <button>
                  <img src={Eye} />
                </button>
                <button>
                  <img className="px-5" src={Pencil} />
                </button>
                <button>
                  <img src={Sampah} />
                </button>
              </div>
            </td>
          </tr> */}
          {status === 'success'
            ? dataAllProduct.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.category.name}</td>
                    <td>
                      <p>{item.variant.name}</p>
                      {item.variant.option.map((item, index) => {
                        return (
                          <p key={index}>
                            {item.name}&nbsp;
                            {item.stock}
                          </p>
                        )
                      })}
                    </td>
                    <td>
                      <img
                        src={`${config.api_host}/upload/${item.image_url}`}
                        alt="image"
                      />
                    </td>
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
        {/* <div className="flex items-center">
         

          <div onClick={props.handlePrev} className="p-3 rounded bg-green-500">
            <img src={Left} />
          </div>

          <nav aria-label="">
            <ul className="pagination flex">
              <li className="ml-4  text-xl cursor-pointer bg-green-500 p-2 text-white rounded">
                <a
                  className="page-link "
                >
                  1
                </a>
              </li>
              <li className="ml-4  text-xl cursor-pointer  p-2 text-gray-500 rounded">
                <a
                  className="page-link "
                >
                  2
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-3 rounded bg-green-500 ml-4">
            <img src={Right} />
          </div>
        </div> */}
      </div>
    </div>
  )
}
