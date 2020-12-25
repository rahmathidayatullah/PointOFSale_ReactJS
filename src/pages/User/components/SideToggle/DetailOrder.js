import React from 'react'

export default function DetailOrder() {
  return (
    <div className="p-6 rounded-xl shadow-lg flex flex-col bg-white">
      <input
        className="text-1xl p-3 rounded-md bg-gray-50"
        placeholder="Fullname"
      />
      <input
        className="text-1xl p-3 mt-3 rounded-md bg-gray-50"
        placeholder="Email active"
      />
    </div>
  )
}
