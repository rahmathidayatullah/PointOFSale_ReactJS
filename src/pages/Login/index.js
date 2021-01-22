import React, { useState } from 'react'
import BgLeft from '../../assets/img/2.svg'
import BgLRight from '../../assets/img/1.svg'

import Hero from '../../assets/img/orang.svg'

import { useForm } from 'react-hook-form'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/Auth/action'
import { rules } from './validation'
import { login } from '../../api/auth'

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

export default function Index() {
  const { register, handleSubmit, errors, setError } = useForm()
  const [status, setStatus] = useState(statusList.idle)
  const dispatch = useDispatch()
  const history = useHistory()

  const [errordata, seterrordata] = useState()

  console.log('errordata')
  console.log(errordata)

  //fungsi menangani form submit
  const onSubmit = async ({ email, password }) => {
    //set status menjadi 'process'
    setStatus(statusList.process)

    //kirim data ke web API  menggunakan helper 'login'
    let { data } = await login(email, password)

    //cek apakah server mengembalikan error
    if (data.error) {
      console.log('data eror')
      // console.log('data errorrr')
      // console.log(data)
      //tangani eror bertipe 'invalidCredential'
      // setError('password', { type: 'invalidCredential', message: data.message })
      seterrordata(data.message)

      //set status menjadi error
      setStatus(statusList.error)
    } else {
      // jika berhasil login

      // ambil data 'user' dan `token` dari respon server
      let { user, token } = data

      //dispatch ke redux store, action 'userlogin' dengan data 'user' dan 'token'
      dispatch(userLogin(user, token))
      history.push('/admin')

      //redirect ke halaman home user dashboard
    }
    console.log('data', data)
    setStatus(statusList.success)
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="flex w-full h-full">
        <div className="w-6/12 bg-white h-full relative">
          <img src={BgLeft} className="absolute left-0 top-0 h-screen" />
          <img
            className="absolute z-10 bottom-0"
            src={Hero}
            style={{ width: '36rem', right: '-5rem' }}
          />
        </div>
        <div className="w-6/12 bg-yellow-400 h-full relative">
          <img className="absolute right-0 top-0 h-screen" src={BgLRight} />
          <div
            className="absolute w-3/4 h-3/4"
            style={{
              top: '60%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          >
            <p className="text-4xl font-normal">Welcome to</p>
            <p className="text-4xl font-bold mt-3">Point Of Sale!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
              {/* {data.error ? <p className="float-right mr-5 mb-3"></p> : {}} */}
              {
                <div>
                  {errordata ? (
                    <p className="float-right mr-5 mb-3 text-red-500 font-bold">
                      {errordata}
                    </p>
                  ) : (
                    ''
                  )}
                </div>
              }

              <input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full pl-3 bg-white rounded-full py-2 text-md focus:outline-none"
                ref={register(rules.email)}
              />
              <p className="mt-2 mb-0 ml-1 text-red-500 pl-3">
                {errors.email?.message}
              </p>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="w-full pl-3 bg-white rounded-full py-2 text-md mt-4 focus:outline-none"
                ref={register(rules.password)}
              />
              <p className="mt-2 mb-0 ml-1 text-red-500 pl-3">
                {errors.password?.message}
              </p>
              <button
                className="w-full mt-4 text-center bg-gray-500 rounded-full text-white text-md py-2 font-bold"
                disabled={status === 'process'}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
