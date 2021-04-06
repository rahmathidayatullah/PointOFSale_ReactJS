import React from 'react'
import Down from '../../assets/img/admin/icon-row-statistik.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../features/Category/action'
import {
  fetchStatisticCategory,
  fetchStatisticProduk,
  setCategory,
  setProduk,
} from '../../features/Statistic/action'
import { fetchProduct } from '../../features/Product/action'

export default function Statistik() {
  let dispatch = useDispatch()
  let dataCategory = useSelector((state) => state.category.data)
  let dataProduk = useSelector((state) => state.product.data)
  console.log('dataProduk', dataProduk)
  let dataStatistic = useSelector((state) => state.statistic)
  console.log('dataStatistic', dataStatistic)

  React.useEffect(() => {
    dispatch(fetchCategory())
    dispatch(fetchStatisticCategory())
    dispatch(fetchStatisticProduk())
    dispatch(fetchProduct())
  }, [
    dispatch,
    dataStatistic.keyCategory,
    dataStatistic.keyProduct,
    dataStatistic.keyDate,
  ])
  return (
    <div className="grid grid-cols-2 gap-3 mt-5">
      <div className="rounded-xl shadow-lg bg-white h-90 p-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xs">
            Sales Statistic <span className="font-normal">Category weekly</span>
          </p>
          <div className="flex items-center relative w-24">
            <select
              className="p-2 bg-gray-200 text-gray-400 rounded-2xl flex justify-between absolute left-0 w-full text-xs appearance-none focus:outline-none"
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              <option value="">Category</option>
              {dataCategory.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            <img className="RealtiveCenterY right-2" src={Down} />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          {dataStatistic.dataCategory.map((item) => {
            let target = 1000000
            let data = item.value
            var hasil = ((data / target) * 100).toFixed(1)

            return (
              <div className="flex flex-col items-center">
                <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
                  <div
                    className="w-full absolute bottom-0 bg-red-500 rounded-2xl duration-300"
                    style={{ height: `${hasil}%` }}
                  ></div>
                </div>
                <p className="text-uXs font-bold mt-1">Monday</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="rounded-xl shadow-lg bg-white h-90 p-5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-xs">
            Sales Statistic <span className="font-normal">Product weekly</span>
          </p>
          <div className="flex items-center relative w-24">
            <select
              className="p-2 bg-gray-200 text-gray-400 rounded-2xl flex justify-between absolute left-0 w-full text-xs appearance-none focus:outline-none"
              onChange={(e) => dispatch(setProduk(e.target.value))}
            >
              <option value="">Produk</option>
              {dataProduk.map((item) => {
                return <option value={item.name}>{item.name}</option>
              })}
            </select>
            <img className="RealtiveCenterY right-2" src={Down} />
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-20 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Monday</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-20 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Tuesday</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-48 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Wenesday</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-36 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Friday</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-36 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Saturday</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative h-72 rounded-2xl w-4 bg-gray-200 overflow-hidden">
              <div className="w-full h-36 absolute bottom-0 bg-red-500 rounded-2xl"></div>
            </div>
            <p className="text-uXs font-bold mt-1">Sunday</p>
          </div>
        </div>
      </div>
    </div>
  )
}
