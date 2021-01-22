import React from 'react'

export default function AddCategory(props) {
  return (
    <div className="w-2/5 bg-white rounded-xl p-5">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          {props.textTitle}
          <span className="font-normal ml-2">Category</span>
        </p>
      </div>
      {props.formSubmit}
    </div>
  )
}
