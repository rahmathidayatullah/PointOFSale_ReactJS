import * as React from 'react'
import ImageCard from '../../../assets/img/1.png'
import Shop from '../../../assets/img/shop_card.svg'

export default function Card() {
  return (
    <div className="bg-white border-md shadow-lg p-4 flex flex-col w-64 min-w-16  ">
      <div className="w-full h-48">
        <img src={ImageCard} className="w-full h-full" />
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <div className="flex flex-col">
          <p className="mb-0 text-xl font-semibold whitespace-nowrap">
            Boutique Lampung
          </p>
          <p className="mb-0">Rp. 200.000</p>
          <p className="mb-0 text-sm">Stok : 32</p>
        </div>
        <img src={Shop} />
      </div>
    </div>
  )
}
