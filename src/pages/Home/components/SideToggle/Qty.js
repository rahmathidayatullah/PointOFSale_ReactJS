import React from 'react'
import Image from '../../../../assets/img/1.png'
import Sampah from '../../../../assets/img/sampah.svg'

function Card() {
  return (
    <div className="p-3 bg-white flex items-center w-full h-28 border-xl rounded-md relative mt-4">
      <button className="absolute right-0 top-0 bg-red-500 w-10 h-10 flex justify-center items-center">
        <img src={Sampah} />
      </button>
      <div className="w-28 h-full mr-3">
        <img src={Image} className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-col">
        <p className="text-xl">Continous Delivery</p>
        <p className="text-sm">ID:476345</p>
        <div className="flex items-center justify-between">
          <p className="text-sm">Rp 200.000</p>
          <div className="w-0.5 h-5 bg-gray-200"></div>
          <p className="text-sm">x2</p>
          <div className="flex items-center">
            <button className="rounded-full mr-2 bg-green-500 text-white flex justify-center items-center w-6 h-6 text-xl font-bold">
              <p className="mb-0 relative bottom-1">-</p>
            </button>
            <button className="rounded-full text-white bg-red-500 flex justify-center items-center w-6 h-6 text-xl w-4 font-bold">
              <p className="mb-0 relative bottom-1">+</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Qty() {
  return (
    <div>
      <div className="h-96 overflow-scroll">
        {' '}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <p className="pl-3 mb-0 font-semibold">Sub Total</p>
      <p className="pl-3 font-semibold">Rp. 200.000</p>
    </div>
  )
}
