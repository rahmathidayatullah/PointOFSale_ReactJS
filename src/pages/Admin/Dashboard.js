import React, { useState } from 'react'
import CardBestSeller from '../../components/Dashboard/CardBestSeller'
import Statistik from '../../components/Dashboard/Statistik'
import ReportDate from '../../components/Dashboard/ReportDate'
import ImgText from '../../components/Dashboard/ImgText'
import WricthWatch from '../../assets/img/admin/ic-clock.svg'
import Calender from 'react-calendar'

export default function Dashboard() {
  const [value, onChange] = useState(new Date())
  return (
    <div className="flex">
      <div className="w-3/5">
        <ReportDate />
        <CardBestSeller />
        <Statistik />
      </div>
      <div className="w-2/5 ml-4">
        {/* cashier online */}
        <div className="rounded-xl shadow-xl flex flex-col p-5 bg-white">
          <div className="flex flex-col pb-3 border-b">
            <p className="font-normal text-xl">
              Cashier <span className="font-bold text-green-500">Online</span>
            </p>
          </div>
          {/* ImgText */}
          <ImgText />
          <ImgText />
        </div>
        {/* today's */}
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
