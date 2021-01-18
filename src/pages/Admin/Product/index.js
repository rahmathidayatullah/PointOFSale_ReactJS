import React, { useState, useEffect, useRef } from 'react'
import ManageProduct from './ManageProduct'
import AddProduct from './AddProduct'

export default function Product() {
  return (
    <div className="flex">
      {/* <ManageProduct datas={data} /> */}

      <ManageProduct />

      <AddProduct />
    </div>
  )
}
