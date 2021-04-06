import React from 'react'
import ImageClotes from '../../assets/img/admin/2.png'

import { useDispatch, useSelector } from 'react-redux'

export default function CardBestSeller() {
  let datadashboard = useSelector((state) => state.dashboard)
  // console.log('datadashboard', datadashboard)
  return datadashboard.dataDashboard.length === 0 ? (
    ''
  ) : (
    <div className="mt-5">
      <p className="font-bold text-xl">
        Best Seller<span className="font-normal ml-2">Product</span>
      </p>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <Card />
      </div>
    </div>
  )
}

export function Card() {
  let datadashboard = useSelector((state) => state.dashboard)
  // console.log('datadashboard', datadashboard)

  return datadashboard.dataDashboard.length === 0
    ? ''
    : datadashboard.dataDashboard.data_best_seller.map((items) => {
        return (
          <div className="bg-white h-24 rounded-xl p-2 flex items-center shadow-lg">
            <div className="rounded-xl w-20 h-full">
              <img className="w-full h-full" src={ImageClotes} />
            </div>
            <div className="flex-col ml-2 h-full flex justify-around">
              <p className="font-bold text-sm">{items.name}</p>

              {/* <p className="font-sm text-sm py-1">Category T-Shirt </p> */}
              <p className="font-bold text-red-500 text-sm">{items.price}</p>
            </div>
          </div>
        )
      })
}
