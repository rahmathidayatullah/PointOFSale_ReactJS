import React, { useState } from 'react'
import Profile from '../../assets/img/profile.png'
import Logout from '../../assets/img/logout.svg'
import Moon from '../../assets/img/moon.svg'
import Toggle from '../../assets/img/toggle.png'

export default function TopToggle() {
  return (
    <div
      className="bg-white shadow rounded p-6 absolute z-20"
      style={{ top: '105px', right: '76px' }}
    >
      <div className="flex flex-row items-center justify-between border-b pb-3 w-96">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img className="w-full h-full" src={Profile} />
          {/* img people */}
        </div>
        <div className="flex flex-col">
          <p className="mb-0 text-2xl font-semibold">Rahmat Hidayatullah</p>
          <p className="mb-0 text-md">Administrator POS</p>
        </div>
      </div>
      <div className="flex flex-row items-center  justify-between mt-5">
        <div className="flex flex-row items-center">
          <div className="rounded-full bg-black p-4">
            <img src={Moon} />
            {/* img */}
          </div>
          <p className="mb-0 ml-4 text-xl font-semibold">Dark Mode</p>
        </div>
        <img src={Toggle} />
        {/* toggle */}
      </div>
      <div className="flex flex-row items-center mt-5">
        <div className="flex flex-row items-center">
          <div className="rounded-full bg-black p-4">
            <img src={Logout} />
            {/* img */}
          </div>
          <p className="mb-0 ml-4 text-xl font-semibold">Logout</p>
        </div>
      </div>
    </div>
  )
}
