import React, { useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { config } from '../../../../config'
// import { sendDataToCartreduce } from '../../../../features/Product/action'
import { addItem, removeItem } from '../../../../features/Cart/actions'
import { saveCart } from '../../../../api/cart'
import { hideModal } from '../../../../features/Modal/action'
import { formatRupiah } from '../../../../utils/format-rupiah'
import Swal from 'sweetalert2'

export default function Index(props) {
  // let token = localStorage.getItem('auth')
  //   ? JSON.parse(localStorage.getItem('auth'))
  //   : {}
  // let tokens = token.token
  // console.log('tokeeeennn', token.token)
  // let statusmodal = useSelector((state) => state.modal)
  // console.log('statusmodal modal page', statusmodal)

  let dispatch = useDispatch()
  let singleproduct = useSelector((state) => state.product.datasingle)
  let AllProducts = useSelector((state) => state.product)

  // let dataAllCart = useSelector((state) => state.cart)
  // console.log('data yang diterima dari inputan', dataAllCart)

  const [activelist, setactivelist] = useState()

  // data send card
  const [namaoption, setNamaoption] = useState()
  const [idproduct, setIdproduct] = useState()

  const [inputkeranjang, setInputkeranjang] = useState()

  const clickActive = (title) => {
    setactivelist(title._id)
    setInputkeranjang(title)
    console.log(idproduct)

    setCartsemi({
      productSingle: idproduct,
      _id: idproduct._id,
      idVariantOption: title._id,
      variantName: namaoption,
      variantOption: title.name,
      variantStock: title.stock,
      // qty: 1,
    })
  }

  const [cartsemi, setCartsemi] = useState()
  // console.log('cartsemi', token, cartsemi)

  const sendDataToCart = () => {
    dispatch(addItem(cartsemi))
    console.log('title', inputkeranjang)
    if (inputkeranjang === undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>',
      })
    } else {
      Swal.fire('Data berhasil masuk ke keranjang', '', 'success')
    }

    // console.log('cartsemi', cartsemi)
    // let status = false
    // dispatch(hideModal(status))
  }

  React.useEffect(() => {
    setNamaoption(singleproduct.variant.name)
    setIdproduct(singleproduct)
  }, [AllProducts.datacart])
  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          class="flex align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {/* head modal */}

          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <img
              src={`${config.api_host}/upload/${singleproduct.image_url}`}
              alt="image"
            />
          </div>
          {/*end head modal */}

          <div class="bg-gray-50 px-4 py-3 flex flex-col w-9/12">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2  text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0  sm:w-auto sm:text-sm ml-4"
              onClick={props.onClickCloseModal}
            >
              Close
            </button>
            {/*  */}

            <p className="font-weight-bold text-3xl mt-5">
              {singleproduct.name}
            </p>
            <p className="mt-2">{formatRupiah(singleproduct.price)}</p>
            <p className="mt-2">{singleproduct.description}</p>

            <div className="flex items-center">
              <p className="font-bold font-2xl mr-2">
                {singleproduct.variant.name}
              </p>

              {singleproduct === undefined
                ? ''
                : singleproduct.variant.option.map((title, index) => {
                    return (
                      <ul
                        key={index}
                        className={
                          title._id === activelist
                            ? 'flex w-max items-center cursor-pointer border border-red-400 p-2 mt-2 mr-2 hover:border-red-400'
                            : 'flex w-max mr-2 items-center cursor-pointer border hover:border-red-400 p-2 mt-2'
                        }
                        onClick={() => clickActive(title)}
                      >
                        <li>{title.name}</li>
                        <li className="ml-3">{title.stock}</li>
                      </ul>
                    )
                  })}
            </div>

            <div className="flex items-center mt-6">
              <button
                type="button"
                class="mt-24  rounded-md border border-gray-300 shadow-sm px-4 py-2  text-base font-medium text-white  bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0  w-full sm:text-sm"
                onClick={() => sendDataToCart()}
              >
                Masukan ke kranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
