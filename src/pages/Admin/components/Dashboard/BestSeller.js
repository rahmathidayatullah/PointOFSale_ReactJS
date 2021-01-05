import React from 'react'
import ImageClotes from '../../../../assets/img/admin/2.png'

export default function BestSeller() {
  return (
    <div className="mt-5">
      <p className="font-bold text-xl">
        Best Seller<span className="font-normal ml-2">Product</span>
      </p>
      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="bg-white h-24 rounded-xl p-2 flex items-center shadow-lg">
          <div className="rounded-xl w-20 h-full">
            <img className="w-full h-full" src={ImageClotes} />
          </div>
          <div className="flex flex-col ml-2">
            <p className="font-bold text-sm">Casual T-Shirt</p>
            <p className="font-sm text-sm py-1">Category T-Shirt </p>
            <p className="font-bold text-red-500 text-sm">Rp. 120.000 </p>
          </div>
        </div>
        <div className="bg-white h-24 rounded-xl p-2 flex items-center shadow-lg">
          <div className="rounded-xl w-20 h-full">
            <img className="w-full h-full" src={ImageClotes} />
          </div>
          <div className="flex flex-col ml-2">
            <p className="font-bold text-sm">Casual T-Shirt</p>
            <p className="font-sm text-sm py-1">Category T-Shirt </p>
            <p className="font-bold text-red-500 text-sm">Rp. 120.000 </p>
          </div>
        </div>
        <div className="bg-white h-24 rounded-xl p-2 flex items-center shadow-lg">
          <div className="rounded-xl w-20 h-full">
            <img className="w-full h-full" src={ImageClotes} />
          </div>
          <div className="flex flex-col ml-2">
            <p className="font-bold text-sm">Casual T-Shirt</p>
            <p className="font-sm text-sm py-1">Category T-Shirt </p>
            <p className="font-bold text-red-500 text-sm">Rp. 120.000 </p>
          </div>
        </div>
      </div>
    </div>
  )
}
