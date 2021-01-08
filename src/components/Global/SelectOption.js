import React from 'react'

export default function SelectOption({ valuerole, onChange, name }) {
  return (
    <select
      className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-400 focus:outline-none"
      value={valuerole}
      onChange={onChange}
      name={name}
    >
      <option>Pilih Role</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>
  )
}
