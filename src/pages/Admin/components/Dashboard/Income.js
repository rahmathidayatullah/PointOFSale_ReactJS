import React from 'react'

export default function Income() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-red-500 h-32 rounded-md text-white p-3">
        <p className="text-xl">Today's Income</p>
        <p className="mt-3 text-xl font-bold">Rp. 200.120.000</p>
        <p>+ 20% Yesterday</p>
      </div>
      <div className="bg-yellow-500 h-32 rounded-md border-blue-500 text-white p-3">
        <p className="text-xl">Today's Income</p>
        <p className="mt-3 text-xl font-bold">Rp. 200.120.000</p>
        <p>+ 20% Yesterday</p>
      </div>
      <div className="bg-green-500 h-32 rounded-md border-green-500 text-white p-3">
        <p className="text-xl">Today's Income</p>
        <p className="mt-3 text-xl font-bold">Rp. 200.120.000</p>
        <p>+ 20% Yesterday</p>
      </div>
    </div>
  )
}
