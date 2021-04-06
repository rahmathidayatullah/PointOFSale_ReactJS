import React from 'react'

export default function DetailOrder(props) {
  return (
    <div className="p-6 rounded-xl shadow-lg flex flex-col bg-white">
      {/* <form onSubmit={props.onSubmitCs}> */}
      <input
        className="text-1xl p-3 rounded-md bg-gray-50"
        placeholder="Fullname"
        name="nama_lengkap"
        value={props.fullname}
        onChange={props.handleChange}
      />
      <input
        className="text-1xl p-3 mt-3 rounded-md bg-gray-50"
        name="email"
        value={props.email}
        placeholder="Email active"
        onChange={props.handleChange}
      />
      {/* </form> */}
    </div>
  )
}
