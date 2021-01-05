import React from 'react'
import Plus from '../../../../assets/img/admin/add.svg'

export default function AddProduct(props) {
  // console.log('asd', props.error)
  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {!props.update ? 'Add' : 'Update'}

          {/* Add */}

          <span className="font-normal ml-2">Product</span>
        </p>
      </div>

      <input
        className={
          props.dataerror === 'field minimal 3 karakter'
            ? 'w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none border border-red-500 text-red-500'
            : 'w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none'
        }
        value={props.valuename}
        name="nama"
        onChange={props.handleChange}
        placeholder="Nama"
      />
      <p className="text-sm text-red-500 mt-2">{props.dataerror}</p>
      <select
        className="w-full mt-3 p-2 border border-gray-200 left-0 rounded-md text-gray-400 focus:outline-none"
        value={props.valuecategory}
        name="category"
        onChange={props.handleChange}
      >
        <option value="">Pilih category</option>
        <option value="category1">category1</option>
        <option value="category2">category2</option>
      </select>
      <input
        className="w-full  mt-3 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
        placeholder="Nama"
        type="file"
      />

      <button
        className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md font-bold"
        onClick={props.handleSubmit}
      >
        {!props.update ? 'ADD PRODUCT' : 'UPDATE PRODUK'}
      </button>
    </div>
  )
}
