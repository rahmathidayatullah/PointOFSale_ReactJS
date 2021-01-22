import React, { useState } from 'react'
import IconDown from '../../../assets/img/admin/drop.svg'
import Search from '../../../assets/img/admin/search.svg'
import Edit from '../../../assets/img/admin/pencil.svg'
import Delete from '../../../assets/img/admin/sampah.svg'
import { fetchVariant } from '../../../features/Variant/action'
import { useDispatch, useSelector } from 'react-redux'
export default function ManageVariant() {
  let dispatch = useDispatch()
  // let variant = useSelector((state) => state.variant)

  let variant = useSelector((state) => state.variant)

  React.useEffect(() => {
    dispatch(fetchVariant())
  }, [])

  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          Variants<span className="font-normal ml-2">Manage</span>
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
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
            placeholder="Search Variant"
          />
          <img className="RealtiveCenterY right-2 z-10" src={Search} />
        </div>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Variant Name</th>
            <th>Size , Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>Baju Batik</td>
            <td>
              <div className="relative w-28 flex items-center">
                <select className="w-100 py-2 pl-4 pr-8 font-bold bg-green-300 text-white appearance-none rounded border focus:outline-none">
                  <option>Pilih Size</option>
                  <option>XL</option>
                  <option>L</option>
                  <option>M</option>
                </select>
                <img
                  className="right-1 absolute z-10 RealtiveCenterY pointer-events-none"
                  src={IconDown}
                />
              </div>
            </td>
            <td>4</td>
            <td>
              <button className="mr-3">
                <img src={Delete} />
              </button>
              <button>
                <img src={Edit} />
              </button>
            </td>
          </tr> */}
          {variant &&
            variant.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    {item.option.map((dataa) => {
                      return (
                        <div className="flex">
                          <p className="w-1/2">{dataa.name}</p>
                          <p className="w-1/2">{dataa.stock}</p>
                        </div>
                      )
                    })}
                  </td>
                  <td className="flex items-center">
                    <button className="mr-3">
                      <img src={Delete} />
                    </button>
                    <button>
                      <img src={Edit} />
                    </button>
                  </td>
                  {/* <td>{stock}</td> */}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
