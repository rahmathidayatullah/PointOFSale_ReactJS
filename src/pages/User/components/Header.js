import React from 'react'
import Brand from '../../../assets/img/brand.svg'
import Search from '../../../assets/img/search.svg'

import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../../features/Category/action'

export default function Header({
  TopElmnt,
  valueSearch,
  onChangeSearch,
  listcategory,
  liatCategoryAll,
  SortAsc,
  SortDesc,
  TimeNews,
}) {
  // let dispatch = useDispatch()
  // let categorylist = useSelector((state) => state.category.data)

  const IconSearch = {
    right: '20px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  }
  // React.useEffect(() => {
  //   dispatch(fetchCategory())
  // }, [])

  return (
    <div className="bg-header fixed z-10 top-0 left-0 w-full px-20 pt-6">
      <div className="flex flex-row items-center justify-between z-20">
        <div className="flex flex-row items-center  top-2">
          <img src={Brand} />
          <p className="mb-4 text-5xl font-light ml-3">
            point of <span className="mb-4 font-bold">sales</span>
          </p>
        </div>
        <div className="relative w-1/3 h-10">
          <input
            className="shadow-md pl-8 rounded-3xl py-4 absolute h-full w-full left-0 focus:outline-none"
            name="search"
            placeholder="Search"
            value={valueSearch}
            onChange={onChangeSearch}
          />
          <img style={IconSearch} src={Search} />
        </div>
        <p className="mb-0 text-2xl font-semibold">Hello, Welcome back !</p>
        <div className="w-12 h-12 cursor-pointer rounded-full bg-white shadow flex items-center justify-center ">
          {TopElmnt}
        </div>
      </div>
      <div className="flex flex-row items-center mt-5">
        <div className="w-3/6 border-r h-20 pr-5 ">
          <div className="bg-white shadow w-full h-full p-5 shadow rounded">
            <ul className="border-b w-full h-full scroll-hidden overflow-scroll flex flex-row flex-nowrap">
              {liatCategoryAll}
              {listcategory}
            </ul>
          </div>
        </div>
        <div className="w-3/6 ml-5 flex justify-between flex-row items-center">
          <div className="flex flex-row items-center bg-white rounded-md inline-flex shadow">
            {SortAsc}
            {SortDesc}
          </div>
          {TimeNews}
          <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            Discount
          </button>
          <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            Best Seller
          </button>
          {/* <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            Best Seller
          </button> */}
        </div>
      </div>
    </div>
  )
}
