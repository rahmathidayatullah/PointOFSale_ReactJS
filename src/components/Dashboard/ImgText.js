import React from 'react'
import Profile from '../../assets/img/admin/4.png'

export default function ImgText(props) {
  return (
    <div className="flex items-center mt-4">
      <div className="w-18 h-18 rounded-full border-4 border-red-500 overflwo-hidden mr-5 p-1">
        <img src={Profile} className="h-full w-full" />
        {/* image */}
      </div>
      <div className="flex flex-col">
        {/* <p className="font-semibold">Rahmat Hidayatullah</p> */}
        <p className="font-semibold">{props.nama}</p>
        {/* <p className="font-normal">Cashier 2</p> */}
        <p className="font-normal">{props.namaCasir}</p>
      </div>
    </div>
  )
}
