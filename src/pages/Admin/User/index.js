import React from 'react'
import AddUser from './AddUser'
import ManageUser from './ManageUser'
export default function User() {
  return (
    <div className="flex">
      <ManageUser />
      <AddUser />
    </div>
  )
}
