import * as React from 'react'
import ImageCard from '../../../assets/img/1.png'
import Shop from '../../../assets/img/shop_card.svg'

export default function Card({
  image,
  harga,
  datavariant,
  variantname,
  namaproduk,
  onClickModal,
}) {
  return (
    <div
      className="bg-white border-md shadow-lg p-4 flex flex-col w-64 min-w-16 hover:bg-gray-100 duration-500"
      onClick={onClickModal}
    >
      <div className="w-full h-48 cursor-pointer">
        {/* <img src={ImageCard} className="w-full h-full" /> */}
        <img src={image} className="w-full h-full" />
      </div>
      <div className="flex flex-row justify-between items-center mt-3">
        <div className="flex flex-col">
          <p className="mb-0 text-xl font-semibold whitespace-nowrap">
            {/* Boutique Lampung */}
            {namaproduk}
          </p>
          <p className="mb-0">{harga}</p>
          <p className="mb-0 text-sm mt-2 font-bold">{variantname}</p>
          <p className="mb-0 text-sm">{datavariant}</p>
        </div>
        <img src={Shop} />
      </div>
    </div>
  )
}
