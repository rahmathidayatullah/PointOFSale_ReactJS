import React from 'react'
import Plus from '../../../assets/img/admin/add.svg'

export default function AddCategory({ valuecategory, handleSubmit, onChange }) {
  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Add<span className="font-normal ml-2">Category</span>
        </p>
      </div>
      <input
        className="w-full mt-5 p-2 border border-gray-200 left-0 rounded-md focus:outline-none"
        placeholder="Category Name"
        value={valuecategory}
        onChange={onChange}
        name="category"
      />
      <button
        className="mt-3 p-2 bg-green-500 text-white focus:outline-none flex items-center w-full justify-center rounded-md"
        onClick={handleSubmit}
      >
        <img src={Plus} />
        <p className="font-bold text-md pl-3">Add Categoryy</p>
      </button>
    </div>
  )
}
