import React, { useState } from 'react'
import AddUser from './AddUser'
import ManageUser from './ManageUser'
import Eye from '../../../assets/img/admin/eye.svg'
import Pencil from '../../../assets/img/admin/pencil.svg'
import Sampah from '../../../assets/img/admin/sampah.svg'

export default function User() {
  const [array, setArray] = useState([])

  const [data, setdata] = useState({
    key: 0,
    email: '',
    fullname: '',
    role: '',
    newpassword: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log('data : data', data)

    if (data.key !== 0) {
      console.log('data', data.key)

      let arr = array.filter((items) => {
        return items.key === data.key
      })

      let [{ key }] = arr
      let arrNew = array.filter((items) => {
        return items.key !== key
      })

      arrNew.push({
        key: (data.key = 0),
        email: data.email,
        fullname: data.fullname,
        role: data.role,
        newpassword: data.newpassword,
      })
      setArray(arrNew)
    } else {
      let arr = [...array]
      arr.push({
        key: Math.random(),
        email: data.email,
        fullname: data.fullname,
        role: data.role,
        newpassword: data.newpassword,
      })

      setArray(arr)
    }
  }

  const onChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })

    console.log(data)
  }

  const Delete = (key) => {
    console.log('data array delete', key)
    let arr = array.filter((items) => {
      return items.key !== key
    })

    setArray(arr)
  }

  const Edit = (key, email, fullname, role, newpassword) => {
    setdata({
      ...data,
      key: key,
      email: email,
      fullname: fullname,
      role: role,
      newpassword: newpassword,
    })
  }

  return (
    <div className="flex">
      <ManageUser
        tbody={
          <tbody>
            {array.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.email}</td>
                  <td>{data.fullname}</td>
                  <td>{data.role}</td>
                  <td>
                    <div className="flex items-center">
                      <button>
                        <img src={Eye} />
                      </button>
                      <button
                        onClick={() =>
                          Edit(
                            data.key,
                            data.email,
                            data.newpassword,
                            data.role,
                            data.fullname,
                          )
                        }
                      >
                        <img className="px-5" src={Pencil} />
                      </button>
                      <button onClick={() => Delete(data.key)}>
                        <img src={Sampah} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        }
      />
      <AddUser
        handleSubmit={handleSubmit}
        valueEmail={data.email}
        valuenewpassword={data.newpassword}
        valuerole={data.role}
        onChange={onChange}
      />
    </div>
  )
}
