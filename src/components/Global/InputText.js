import React from 'react'

export default function InputText({
  placeholder,
  valueEmail,
  onChange,
  name,
  type,
}) {
  return (
    <input
      className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
      placeholder={placeholder}
      value={valueEmail}
      onChange={onChange}
      name={name}
      type={type}
    />
  )
}
