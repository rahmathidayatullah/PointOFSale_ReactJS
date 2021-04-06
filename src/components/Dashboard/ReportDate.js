import React from 'react'
import { formatRupiah } from '../../utils/format-rupiah'

export default function ReportDate(props) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-red-500 h-32 rounded-md text-white p-3">
        <p className="text-xl">Today's Income</p>
        <p className="mt-3 text-xl font-bold">{formatRupiah(props.day)}</p>
        <p>{props.persentaseDayBefore}</p>
      </div>
      <div className="bg-yellow-500 h-32 rounded-md border-blue-500 text-white p-3">
        <p className="text-xl">Week's Income</p>
        <p className="mt-3 text-xl font-bold">{formatRupiah(props.week)}</p>
        <p>{props.persentaseWeekBefore}</p>
      </div>
      <div className="bg-green-500 h-32 rounded-md border-green-500 text-white p-3">
        <p className="text-xl">Month's Income</p>
        <p className="mt-3 text-xl font-bold">{formatRupiah(props.month)}</p>
        <p>{props.persentaseMonthBefore}</p>
      </div>
    </div>
  )
}
