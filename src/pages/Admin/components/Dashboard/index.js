import React, { useState } from 'react'
import WricthWatch from '../../../../assets/img/admin/ic-clock.svg'

import Calender from 'react-calendar'

import Income from './Income'
import BestSeller from './BestSeller'
import Statistik from './Statistik'
import CashierOnline from './CashierOnline'

export default function Dashboard() {
  const [value, onChange] = useState(new Date())

  return (
    <div className="flex">
      <div className="w-3/5">
        {/* Income todays */}
        <Income />
        <BestSeller />
        <Statistik />
      </div>
      <div className="w-2/5 ml-4">
        {' '}
        <CashierOnline />
        {/* todas date */}
        <div className="rounded-xl bg-white shadow-lg flex items-center justify-between mt-5 px-5 py-2">
          <p className="font-bold text-red-500 text-xl">Todays's</p>
          <div className="w-0.5 h-10 bg-gray-200"></div>
          <p className="text-xl">00:07:30:00 AM</p>
          {/* img */}
          <img src={WricthWatch} />
        </div>
        {/* Calender */}
        <div className="rounded-lg shadow-lg bg-white p-5 mt-5">
          <Calender onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  )
}
