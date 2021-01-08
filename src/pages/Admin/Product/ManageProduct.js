import React from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'

import Left from '../../../assets/img/admin/left.svg'
// import Right from '../../../../assets/img/admin/right.svg'

export default function ManageProduct(props) {
  const Title = ['No', 'Nama', 'Category', 'Action']

  // console.log(data)

  const HeadTable = Title.map((itemTitle) => (
    <th key={itemTitle}>{itemTitle}</th>
  ))

  // console.log('props', props)

  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Product<span className="font-normal ml-2">Manage</span>
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
        {/* select entries */}
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

        {/* search */}
        <div className="relative w-48 flex items-center p-3">
          <input
            className="absolute p-2 border border-gray-200 left-0 rounded focus:outline-none"
            placeholder="Search Product"
            name="search"
            value={props.searchvalue}
            onChange={props.onChange}
          />
          <img className="RealtiveCenterY right-2 z-10" src={Search} />
        </div>
      </div>

      <table className="w-full mt-5">
        <thead>
          <tr>
            {/* <th>No</th>
            <th>Nama</th>
            <th>Category</th>
            <th>Action</th> */}
            {HeadTable}
          </tr>
        </thead>
        <tbody>{props.dataBody}</tbody>
      </table>

      <div className="flex w-full justify-end mt-3">
        <div className="flex items-center">
          {/* <div className="p-3 rounded bg-green-500">
            <img src={Left} />
          </div> */}

          <div onClick={props.handlePrev} className="p-3 rounded bg-green-500">
            <img src={Left} />
            {/* {props.handlePrev} */}
          </div>

          {props.numbering}
          {/* <p className="ml-4 text-gray-400 text-xl">1</p>
          <p className="ml-4 text-gray-400 text-xl">2</p>
          <p className="ml-4 text-gray-400 text-xl">3</p>
          <p className="ml-4 text-gray-400 text-xl">4</p>
          <p className="ml-4 text-gray-400 text-xl">5</p> */}
          {props.nextPage}
          {/* <div className="p-3 rounded bg-green-500 ml-4">
            <img src={Right} />
          </div> */}
        </div>
      </div>
    </div>
  )
}
