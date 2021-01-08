import { useForm } from 'react-hook-form'
import InputText from '../../../components/Global/InputText'
import SelectOption from '../../../components/Global/SelectOption'
import ButtonAdd from '../../../components/Global/ButtonAdd'
import Plus from '../../../assets/img/admin/add.svg'
import React, { useState } from 'react'

import { rules } from './validation'
import { registerUser } from '../../../api/auth'

// status list
const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

export default function AddUser() {
  //   {
  //   valueEmail,
  //   valueFullname,
  //   valuerole,
  //   valuenewpassword,
  //   // handleSubmit,
  //   onChange,
  // }
  const [status, setStatus] = useState(statusList.idle)

  const [messageName, setmessageName] = useState('')
  // (2) keluarkan fungsi `register`, `handleSubmit`, `errors`, `setError` dari `useForm`
  let {
    register,
    getValues,
    trigger,
    handleSubmit,
    reset,
    errors,
    setError,
  } = useForm()

  const onSubmit = async (formData) => {
    // console.log('form data', formData)
    // return alert(JSON.stringify(formData))
    // alert(JSON.stringify(formData))
    setStatus(statusList.process)

    let { data } = await registerUser(formData)

    console.log('data register asoy', data)
    // (1) cek apakah ada error
    if (data.error) {
      // (2) dapatkan field terkait jika ada errors
      let fields = Object.keys(data.fields)

      // (3) untuk masing-masing field kita terapkan error dan tangkap pesan errornya
      fields.forEach((field) => {
        setError(field, {
          type: 'server',
          message: data.fields[field]?.properties?.message,
        })
      })
      setStatus(statusList.error)
    }

    // const result = getValues('full_name')
    if (getValues('full_name')) {
      setmessageName(getValues('full_name'))
      // alert(messageName)
    }

    reset()

    setStatus(statusList.success)
  }

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3 flex items -center">
        <p className="font-bold text-2xl">
          Add
          <span className="font-normal ml-2">User</span>
          {messageName ? (
            <span className="font-normal ml-2 text-red-500 text-sm">
              {messageName} Berhasil !
            </span>
          ) : (
            ''
          )}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <InputText
          placeholder="Fullname"
          name="full_name"
          type="text"
          ref={register}
        /> */}

        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="Fullname"
          name="full_name"
          type="text"
          defaultValue=""
          ref={register(rules.full_name)}
        />
        <p className="mt-2 mb-0 ml-1 text-red-500">
          {(console.log('register', register), errors.full_name?.message)}
        </p>

        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="User Email"
          name="email"
          type="email"
          ref={register(rules.email)}
        />
        <p className="mt-2 mb-0 ml-1 text-red-500">{errors.email?.message}</p>

        {/* <InputText
          placeholder="User Email"
          name="email"
          type="email"
          ref={register}
        /> */}

        {/* <SelectOption value={valuerole} onChange={onChange} name="role" /> */}

        {/* <InputText
          placeholder="New Password"
          name="password"
          type="password"
          ref={register}
        /> */}

        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          placeholder="New Password"
          name="password"
          type="password"
          ref={register(rules.password)}
        />
        <p className="mt-2 mb-0 ml-1 text-red-500">
          {errors.password?.message}
        </p>
        <button
          className="mt-3 p-2 bg-green-500 flex items-center text-white focus:outline-none w-full justify-center rounded-md"
          // onClick={onClick}
          // disabled={disabled}
          disabled={status === statusList.process}
        >
          {status === statusList.process ? (
            <div className="flex items-center">
              <img src={Plus} />
              <p className="font-bold text-md pl-3">Sedang Proses</p>
            </div>
          ) : (
            <div className="flex items-center">
              <img src={Plus} />
              <p className="font-bold text-md pl-3">Add Produk</p>
            </div>
          )}
        </button>
      </form>
    </div>
  )
}
