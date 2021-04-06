import React, { useState } from 'react'
import Image from '../../../../assets/img/1.png'
import Sampah from '../../../../assets/img/sampah.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  addItem,
  removeItem,
  fetchingDataCart,
  deleteVariantOptionById,
} from '../../../../features/Cart/actions'
import { config } from '../../../../config'
import { formatRupiah } from '../../../../utils/format-rupiah'
import { sumPrice } from '../../../../utils/sum-price'

function Card(props) {
  let dispatch = useDispatch(props)
  let dataCart = useSelector((state) => state.cart)
  console.log('dataCart', dataCart)

  React.useEffect(() => {
    dispatch(fetchingDataCart)
  }, [dataCart])

  return (
    <>
      {!dataCart.length ? (
        <p className="text-3xl">Items Kosong</p>
      ) : (
        dataCart.map((items) => {
          return (
            <div className="p-3 bg-white flex items-center w-full h-28 border-xl rounded-md relative mt-4">
              <button
                className="absolute right-0 top-0 bg-red-500 w-10 h-10 flex justify-center items-center"
                onClick={() => dispatch(deleteVariantOptionById(items))}
              >
                <img src={Sampah} />
              </button>
              <div className="w-28 h-full mr-3">
                {/* <img
                  src={`${config.api_host}/upload/${items.productSingle.image_url}`}
                  className="w-full h-full"
                /> */}
              </div>
              <div className="w-full h-full flex flex-col">
                {/* <p className="text-xl">{items.productSingle.name}</p> */}
                {/* <p className="text-sm">{items._id}</p> */}
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    {/* {formatRupiah(items.productSingle.price)} */}
                  </p>
                  <div className="w-0.5 h-5 bg-gray-200"></div>
                  {/* <p className="text-sm">x{items.qty}</p> */}
                  <div className="flex items-center">
                    <button
                      className="rounded-full mr-2 bg-green-500 text-white flex justify-center items-center w-6 h-6 text-xl font-bold"
                      onClick={() => dispatch(removeItem(items))}
                    >
                      <p className="mb-0 relative bottom-1">-</p>
                    </button>
                    <button
                      className="rounded-full text-white bg-red-500 flex justify-center items-center w-6 h-6 text-xl w-4 font-bold"
                      onClick={() => dispatch(addItem(items))}
                    >
                      <p className="mb-0 relative bottom-1">+</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
    </>
  )
}

export default function Qty(props) {
  console.log('datacounter', props.datacounter)
  let dispatch = useDispatch()
  let dataCart = useSelector((state) => state.cart)
  console.log('dataCart bawah', dataCart)

  let total = dataCart.map((items) => {
    return items
  })
  // console.log(total.reduce((a, b) => a + b.productSingle.price * b.qty, 0))
  // console.log('total', total)

  React.useEffect(() => {
    dispatch(fetchingDataCart)
  }, [])

  return (
    <div>
      <div className="h-96 overflow-scroll">
        {' '}
        <Card />
      </div>
      {/* <p className="pl-3 font-semibold">Rp. 200.000</p> */}
      {/* {dataCart.length && props.datacounter === 1 ? (
        <p className="pl-3 font-semibold">
          Sub Total <br />
          {formatRupiah(
            total.reduce((a, b) => a + b.productSingle.price * b.qty, 0),
          )}
        </p>
      ) : (
        ''
      )} */}
    </div>
  )
}
