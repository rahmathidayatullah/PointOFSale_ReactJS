import React from 'react'
import Plus from '../../assets/img/admin/add.svg'

export default function ButtonAdd({ onClick, text, disabled }) {
  return (
    <button
      className="mt-3 p-2 bg-green-500 flex items-center text-white focus:outline-none w-full justify-center rounded-md"
      onClick={onClick}
      disabled={disabled}
    >
      <img src={Plus} />
      <p className="font-bold text-md pl-3">{text}</p>
    </button>
  )
}
