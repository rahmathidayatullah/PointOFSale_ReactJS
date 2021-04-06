import React from 'react'
import AddDiscount from './AddDiscount'
import ManageDiscount from './ManageDiscount'

export default function index() {
  return (
    <div className="flex">
      <ManageDiscount />
      <AddDiscount />
    </div>
  )
}
