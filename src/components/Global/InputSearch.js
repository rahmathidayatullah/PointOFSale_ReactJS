import React from 'react'
import Search from '../../assets/img/admin/search.svg'

export default function InputSearch() {
  return (
    <div className="relative w-48 flex items-center p-3">
      <input
        className="absolute p-2 border border-gray-200 left-0 rounded focus:outline-none"
        placeholder="Search User"
      />
      <img className="RealtiveCenterY right-2 z-10" src={Search} />
    </div>
  )
}
