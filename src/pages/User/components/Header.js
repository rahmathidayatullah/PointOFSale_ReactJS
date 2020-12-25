// import React, { useState } from 'react'
import Brand from '../../../assets/img/brand.svg'
import Search from '../../../assets/img/search.svg'
// import Close from '../../../assets/img/close.svg'
// import Toggle from '../../../assets/img/toggle.svg'
// import TopToggle from './TopToggle'
import Up from '../../../assets/img/up.svg'
import Down from '../../../assets/img/down.svg'

export default function Header({ TopElmnt }) {
  const IconSearch = {
    right: '20px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  }
  // const [toggle, setToggle] = useState(true)

  // const toggler = () => {
  //   toggle ? setToggle(false) : setToggle(true)
  // }

  return (
    <div className="bg-header fixed z-10 top-0 left-0 w-full px-20 pt-6">
      <div className="flex flex-row items-center justify-between z-20">
        <div className="flex flex-row items-center  top-2">
          <img src={Brand} />
          <p className="mb-4 text-5xl font-light ml-3">
            point of <span className="mb-4 font-bold">sales</span>
          </p>
        </div>
        <div className="relative w-1/3 h-10">
          <input
            className="shadow-md pl-8 rounded-3xl py-4 absolute h-full w-full left-0 focus:outline-none"
            placeholder="Search"
          />
          <img style={IconSearch} src={Search} />
        </div>
        <p className="mb-0 text-2xl font-semibold">Hello, Welcome back !</p>
        <div className="w-12 h-12 cursor-pointer rounded-full bg-white shadow flex items-center justify-center ">
          {TopElmnt}
          {/* {toggle ? (
            <img className="" onClick={toggler} src={Toggle} />
          ) : (
            <div>
              <img src={Close} onClick={toggler} />

              <TopToggle />
            </div>
          )} */}
        </div>
      </div>
      <div className="flex flex-row items-center mt-5">
        <div className="w-3/6 border-r h-20 pr-5 ">
          <div className="bg-white shadow w-full h-full p-5 shadow rounded">
            <ul className="border-b w-full h-full scroll-hidden overflow-scroll flex flex-row flex-nowrap">
              <li className="float-left font-bold text-1xl">
                <a className="text-grey item-list cursor-pointer">All</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Wristwatch</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Shoes</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Pants</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Shirt</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Bag</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Shoes</a>
              </li>
              <li className="float-left font-bold text-1xl pl-10">
                <a className="text-grey item-list cursor-pointer">Shoes</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/6 ml-5 flex justify-between flex-row items-center">
          <div className="flex flex-row items-center bg-white rounded-md inline-flex shadow">
            <button className="mr-3 p-3 focus:outline-none rounded-tl-md rounded-bl-md">
              <img src={Down} />
            </button>
            <button className="p-3 focus:outline-none rounded-tr-md rounded-br-md">
              <img src={Up} />
            </button>
          </div>
          <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            New Product
          </button>
          <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            Promo
          </button>
          <button className="bg-white rounded-md text-1xl py-3 px-4 font-bold ml-5 shadow focus:outline-none">
            Best Seller
          </button>
        </div>
      </div>
    </div>
  )
}
