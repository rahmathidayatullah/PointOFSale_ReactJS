import React from 'react'
import Left from '../../../assets/img/admin/left.svg'
import Right from '../../../assets/img/admin/right.svg'
import SelectEntries from '../../../components/Global/SelectEntries'
import InputSearch from '../../../components/Global/InputSearch'

const Title = ['No', 'Email', 'Fullname', 'Action']

const data = [
  {
    id: 1,
    email: 'rahmat@gmail.com',
    fullname: 'Rahmat Kucil',
  },
  {
    id: 2,
    email: 'rahmat@gmaiffl.com',
    fullname: 'Daus Jojon',
  },
  {
    id: 3,
    email: 'rahmat@gmail.com',
    fullname: 'Joko SUsilo',
  },
]

export default function ManageUser({ tbody }) {
  return (
    <div className="w-3/5 bg-white rounded-xl p-5 mr-3 relative">
      <div className="border-b pb-3">
        <p className="font-bold text-2xl">
          User<span className="font-normal ml-2">Manage</span>
        </p>
      </div>
      <div className="flex items-center justify-between mt-8">
        <SelectEntries />
        <InputSearch />
      </div>

      <table className="w-full mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Fullname</th>
            <th>Action</th>
          </tr>
        </thead>
        {tbody}
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
