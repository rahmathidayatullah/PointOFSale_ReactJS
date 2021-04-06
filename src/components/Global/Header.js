import React, { useState } from 'react'
import Brand from '../../assets/img/brand.svg'

import Profile from '../../assets/img/admin/profile.jpg'

export default function Header({ TopElement }) {
  return (
    <div
      className="fixed w-full pr-20 pl-28 flex items-center justify-between bg-white p-4"
      style={{ zIndex: '11' }}
    >
      <div className="flex flex-row items-center">
        <img src={Brand} />
        <p className="mb-4 text-5xl font-light ml-3">
          point of <span className="mb-4 font-bold">sales</span>
        </p>
      </div>
      <div className="flex items-center">
        {/* image profile */}
        <div className="w-16 h-16 rounded-full border-4 border-yellow-600 shadow-lg flex items-center justify-center overflow-hidden">
          <img src={Profile} />
        </div>
        {/* text col */}
        <div className="flex flex-col mx-6">
          <p className="font-bold mb-1 ">Rahmat Hidayatullah</p>
          <p>Administrator</p>
        </div>
        {/* icon toggle */}
        <div className="shadow-lg border rounded-full bg-white w-10 h-10 flex items-center justify-center">
          {/* <img src={ToggleDown} /> */}
          {TopElement}
        </div>
      </div>
    </div>
  )
}
