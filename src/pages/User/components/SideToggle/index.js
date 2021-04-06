import React, { useState } from 'react'
import Next from '../../../../assets/img/next.svg'
import SubNext from '../../../../assets/img/subnext.svg'
import Finish from '../../../../assets/img/finish.svg'
import Shop from '../../../../assets/img/shop.svg'
import NextFoot from '../../../../assets/img/nexttt.svg'
import BackFoot from '../../../../assets/img/backkk.svg'
import Qty from '../SideToggle/Qty'
import DetailOrder from '../SideToggle/DetailOrder'
import PageFinish from '../SideToggle/Finish'
import { useForm } from 'react-hook-form'
import { createOrder } from '../../../../api/order'
import { clearItems, fetchingDataCart } from '../../../../features/Cart/actions'
import { useDispatch, useSelector } from 'react-redux'
import { saveCart } from '../../../../api/cart'
import { fetchingorder } from '../../../../features/Order/action'
import Swal from 'sweetalert2'

export default function () {
  let { token } = JSON.parse(localStorage.getItem('auth'))
  let dispatch = useDispatch()
  let dataCart = useSelector((state) => state.cart)
  let statusOrder = useSelector((state) => state.order)
  console.log('statusOrder', statusOrder.status)

  console.log('dataCartttttt', dataCart, token)
  const [counter, setCounter] = useState(1)
  const [position, setPosition] = useState('-33%')
  const [ceklocalStorage, setCeklocalStorage] = useState()
  // const [fullname, setFullname] = useState('')
  // const [email, setEmail] = useState('')

  const [data, setData] = useState()
  // console.log('fullname', fullname)
  // console.log('email', email)
  // handle submit form order
  console.log('data', data)

  // show button detail order / order
  const showButtonDetailOrder = () => {
    if (data === undefined) {
      return ''
    } else if (data.nama_lengkap.length && data.email) {
      console.log('data.nama_lengkap', data.nama_lengkap)
      return (
        <button
          className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
          type="submit"
          // onClick={handleNext}
        >
          <p className="relative bottom-1"> Next</p>
          <img className="ml-3" src={NextFoot} />
        </button>
      )
    } else {
      return ''
    }
  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  // console.log('data', data)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // let dataa = await createOrder(data)
    dispatch(fetchingorder(data))

    let datarr = await saveCart(token, dataCart)

    if (statusOrder.status === 'succes') {
      Swal.fire('Good job!', 'You clicked the button!', 'success')
      // console.log('respon valid', dataa, counter)
      // if (dataa.status === 200 && counter === 2) {
      console.log('data berhasil dikirm')
      dispatch(clearItems())
      setCounter(counter + 1)
    }

    // }/
  }

  const handleNext = () => {
    setCounter(counter + 1)
    if (counter === 3) {
      setCounter(counter + 0)
    }
  }
  const handleNextQty = async () => {
    // try {
    //   setCounter(counter + 1)
    //   if (counter === 3) {
    //     setCounter(counter + 0)
    //   }

    //   let data = await saveCart(token, dataCart)
    //   dispatch(clearItems())
    //   console.log(data)
    // } catch (error) {
    //   console.log(error)
    // }
    setCounter(counter + 1)
    if (counter === 3) {
      setCounter(counter + 0)
    }
  }
  const handleBack = () => {
    setCounter(counter - 1)
    if (counter <= 1) {
      setCounter(counter - 0)
    }
  }

  const handleBackFinish = () => {
    setCounter(1)
    setPosition('-33%')
  }

  return (
    <div className="overlay overflow-hidden">
      <div
        className="fixed top-0 h-screen bg-white p-4 right-0 w-4/12 z-40 bg-side"
        style={{ right: position }}
      >
        <div
          className="absolute rounded-xl p-4 bg-side cursor-pointer RealtiveCenterY text-white"
          style={{ left: '-13%', top: '38%' }}
          onClick={() =>
            position === '-33%' ? setPosition('0') : setPosition('-33%')
          }
        >
          <div
            className="absolute bg-red-500 rounded-full -left-1 -top-1"
            style={{ padding: '1px 9px' }}
          >
            <p className="relative bottom-0.5">{dataCart.length}</p>
          </div>
          <img src={Shop} />
        </div>
        <div className="flex justify-between pb-4 border-b border-white items-center">
          <p className="font-bold text-xl">My Cart</p>
          <div className="flex flex-row items-center bg-subSide p-3">
            <img src={Next} />
            <div className="ml-5 flex items-center mr-3">
              <p
                className={
                  counter === 1 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Qty
              </p>
              <img src={SubNext} />
            </div>
            <div className="flex items-center mr-3">
              <p
                className={
                  counter === 2 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Detail Order
              </p>

              <img src={SubNext} />
            </div>
            <div className="flex items-center">
              <p
                className={
                  counter === 3 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Finish
              </p>

              <img src={Finish} />
            </div>
          </div>
        </div>
        {/* <p>{counter}</p> */}

        {counter === 1 ? <Qty datacounter={counter} /> : ''}
        {counter === 2 ? (
          <form onSubmit={handleSubmit}>
            <DetailOrder handleChange={onChange} />
            <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-between w-full shadowOrange">
              <button
                className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
                onClick={handleBack}
              >
                <p className="relative bottom-1"> Back</p>
                <img className="ml-3" src={BackFoot} />
              </button>

              {console.log(
                'ddataaaaaaa',
                data === undefined
                  ? 'jangan tampilkan button'
                  : 'jangan tampilkan button lagi',
              )}

              {data === undefined ? '' : showButtonDetailOrder()}
            </div>
          </form>
        ) : (
          ''
        )}
        {counter === 3 ? <PageFinish /> : ''}

        {dataCart.length && counter === 1 ? (
          <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-end w-full shadowOrange">
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              // onClick={handleNextQty}
              onClick={handleNext}
            >
              <p className="relative bottom-1"> Next</p>
              <img className="ml-3" src={NextFoot} />
            </button>
          </div>
        ) : (
          ''
        )}
        {/* {counter === 2 ? (
         ) : (
          ''
        )} */}
        {counter === 3 ? (
          <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-between w-full shadowOrange">
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              onClick={handleBackFinish}
            >
              <p className="relative bottom-1"> Back</p>
              <img className="ml-3" src={BackFoot} />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
