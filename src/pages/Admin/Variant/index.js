import React from 'react'
import AddVariant from './AddVariant'
import ManageVariant from './ManageVariant'

export default function index() {
  return (
    <div className="flex">
      <ManageVariant />
      <AddVariant />
    </div>
  )
}
