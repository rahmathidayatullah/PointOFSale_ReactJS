import React from 'react'
import Pdf from '../../../../assets/img/admin/pdf.svg'
import Excel from '../../../../assets/img/admin/excel.svg'
import Print from '../../../../assets/img/admin/print.svg'

import IconDown from '../../../../assets/img/admin/drop.svg'
import Search from '../../../../assets/img/admin/search.svg'

import Right from '../../../../assets/img/admin/right.svg'
import Left from '../../../../assets/img/admin/left.svg'
import { data } from 'autoprefixer'

export default function History() {
  const dataTableHead = ['No', 'Invoice', 'User', 'Date', 'Orders', 'Amount']

  let HeadTitle = dataTableHead.map((items) => {
    return <th key={items}>{items}</th>
  })

  return (
    <div className="w-full p-5 bg-white rounded-md">
      <div className="border-b pb-3 flex justify-between">
        <p className="font-bold text-2xl">
          History<span className="font-normal ml-2">View</span>
        </p>
        <div className="flex items-center">
          <input
            type="date"
            className="p-2 bg-white shadow-md border rounded-lg focus:outline-none"
          />
          <button className="p-2 bg-gray-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none">
            {/* img */}
            <img src={Print} />
            <p className="text-white ml-3">Print Out</p>
          </button>
          <button className="p-2 bg-red-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none">
            {/* img */}
            <img src={Excel} />
            <p className="text-white ml-3">Export Excel</p>
          </button>
          <button className="p-2 bg-green-500 shadow-md border rounded-lg flex items-center ml-3 focus:outline-none">
            {/* img */}
            <img src={Pdf} />
            <p className="text-white ml-3">Export Pdf</p>
          </button>
        </div>
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
            placeholder="Search Transaction"
          />
          <img className="RealtiveCenterY right-2 z-10" src={Search} />
        </div>
      </div>

      {/* table */}
      <table className="w-full mt-5">
        <thead>
          <tr>{HeadTitle}</tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td>1</td>
            <td>23231</td>
            <td>Rahmat Ganteng</td>
            <td>20/12/20</td>
            <td>
              <div className="flex items-center">
                <div className="bg-green-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
                <div className="bg-blue-500 text-white text-sm p-2 font-bold rounded-md mx-2">
                  Red T-shirt
                </div>
                <div className="bg-red-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
              </div>
            </td>
            <td>#00A3D5</td>
          </tr>
          <tr>
            <td>1</td>
            <td>23231</td>
            <td>Rahmat Ganteng</td>
            <td>20/12/20</td>
            <td>
              <div className="flex items-center">
                <div className="bg-green-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
                <div className="bg-blue-500 text-white text-sm p-2 font-bold rounded-md mx-2">
                  Red T-shirt
                </div>
                <div className="bg-red-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
              </div>
            </td>
            <td>#00A3D5</td>
          </tr>
          <tr className="bg-gray-100">
            <td>1</td>
            <td>23231</td>
            <td>Rahmat Ganteng</td>
            <td>20/12/20</td>
            <td>
              <div className="flex items-center">
                <div className="bg-green-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
                <div className="bg-blue-500 text-white text-sm p-2 font-bold rounded-md mx-2">
                  Red T-shirt
                </div>
                <div className="bg-red-500 text-white text-sm p-2 font-bold rounded-md">
                  Red T-shirt
                </div>
              </div>
            </td>
            <td>#00A3D5</td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full justify-end mt-3">
        <div className="flex items-center">
          <div className="p-3 rounded bg-green-500">
            <img src={Left} />
            {/* image */}
          </div>
          <p className="ml-4 text-gray-400 text-xl">1</p>
          <p className="ml-4 text-gray-400 text-xl">2</p>
          <p className="ml-4 text-gray-400 text-xl">3</p>
          <p className="ml-4 text-gray-400 text-xl">4</p>
          <p className="ml-4 text-gray-400 text-xl">5</p>
          <div className="p-3 rounded bg-green-500 ml-4">
            {/* image */}
            <img src={Right} />
          </div>
        </div>
      </div>
    </div>
  )
}
