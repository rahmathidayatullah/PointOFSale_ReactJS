import React from 'react'
import AddCategory from './AddCategory'
import ManageCategory from './ManageCategory'

export default function index() {
  return (
    <div className="flex">
      <ManageCategory />
      <AddCategory />
    </div>
  )
}
