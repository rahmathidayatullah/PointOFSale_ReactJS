import React from 'react'
import IconDown from '../../assets/img/admin/drop.svg'

export default function SelectEntries() {
  return (
    <div className="relative w-40 flex items-center">
      <select className="absolute left-0 py-2 pl-4 pr-8 text-white font-bold bg-green-500 appearance-none rounded focus:outline-none">
        <option>Show & entries</option>
        <option>value 1</option>
        <option>value 2</option>
        <option>value 3</option>
      </select>
      <img
        className="right-1 absolute z-10 RealtiveCenterY pointer-events-none"
        src={IconDown}
      />
    </div>
  )
}
