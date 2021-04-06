import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser, fetchEditUser } from '../../../features/User/action'
import { useForm } from 'react-hook-form'
// import { createUser } from '../../../api/user'
import { createUser } from '../../../api/user'
import { rules } from './validation'

export default function AddUser() {
  let dispatch = useDispatch()
  const { register, handleSubmit, errors, setErrors } = useForm()

  let user = useSelector((state) => state.user.datasingle)

  let userAll = useSelector((state) => state.user)
  let idsingle = useSelector((state) => state.user.datasingle._id)
  let statusedit = useSelector((state) => state.user.statusedit)

  const onSubmit = async (data) => {
    let { datar } = await createUser(data)
    console.log(datar)
    dispatch(fetchUser())
  }

  const onEdit = async (data) => {
    console.log('data edit', data, idsingle)
    dispatch(fetchEditUser(data, idsingle))
    dispatch(fetchUser())
  }

  const [full_name, setfull_name] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [role, setRole] = useState('')
  React.useEffect(() => {
    dispatch(fetchUser())
    setfull_name(user.full_name)
    setemail(user.email)
    setpassword(user.password)
  }, [user])

  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3 flex items -center">
        <p className="font-bold text-2xl">
          {statusedit === 'add' ? 'ADD' : 'EDIT'}
          <span className="font-normal ml-2">User</span>
        </p>
      </div>

      <form
        onSubmit={
          statusedit === 'add' ? handleSubmit(onSubmit) : handleSubmit(onEdit)
        }
      >
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="full_name"
          placeholder="Fullname"
          type="text"
          value={full_name}
          onChange={(e) => setfull_name(e.target.value)}
          ref={register(rules.full_name)}
        />
        {errors.full_name?.message}
        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          ref={register(rules.email)}
        />
        {errors.email?.message}

        <input
          className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          ref={register(rules.password)}
        />

        {errors.password?.message}
        <select
          className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-500 focus:outline-none"
          name="role"
          ref={register(rules.role)}
        >
          <option value="">Pilih Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        {errors.role?.message}

        <button
          className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
          type="submit"
        >
          {statusedit === 'add' ? 'ADD' : 'EDIT'}
          &nbsp; USER
        </button>
      </form>
    </div>
  )
}
