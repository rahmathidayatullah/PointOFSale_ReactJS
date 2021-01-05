import React from 'react'
import Profile from '../../../../assets/img/admin/4.png'

export default function CashierOnlie() {
  return (
    <div className="rounded-xl shadow-xl flex flex-col p-5 bg-white">
      {/* cashier online */}
      <div className="flex flex-col pb-3 border-b">
        <p className="font-normal text-xl">
          Cashier <span className="font-bold text-green-500">Online</span>
        </p>
      </div>
      {/*Profile  */}
      <div className="flex items-center mt-4">
        <div className="w-18 h-18 rounded-full border-4 border-red-500 overflwo-hidden mr-5 p-1">
          <img src={Profile} className="h-full w-full" />
          {/* image */}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Rahmat Hidayatullah</p>
          <p className="font-normal">Cashier 2</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-18 h-18 rounded-full border-4 border-red-500 overflwo-hidden mr-5 p-1">
          <img src={Profile} className="h-full w-full" />
          {/* image */}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Rahmat Hidayatullah</p>
          <p className="font-normal">Cashier 2</p>
        </div>
      </div>
    </div>
  )
}
