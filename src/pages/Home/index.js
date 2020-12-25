import React, { useState } from 'react'
import Header from './components/Header'
// import TopToggle from './components/TopToggle'
import Close from '../../assets/img/close.svg'
import Toggle from '../../assets/img/toggle.svg'
import TopToggle from '../Home/components/TopToggle'

import SideToggle from '../Home/components/SideToggle'

import Card from './components/Card'
// import SideToggle from './components/SideToggle'

export default function Home() {
  const [toggle, setToggle] = useState(true)
  // console.log(toggle)

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true)
  }
  return (
    <div className="pl-20 relative">
      <SideToggle />
      {/* <div className="overlay" onClick={() => setToggle(true)}></div> */}
      {/* <TopToggle /> */}
      <Header
        TopElmnt={
          <div>
            {toggle ? (
              <img className="" onClick={toggler} src={Toggle} />
            ) : (
              <div>
                <div
                  onClick={toggler}
                  className="overlay absolute w-screen h-screen z-10 left-0"
                ></div>
                <img src={Close} onClick={toggler} className="relative z-20" />

                <TopToggle />
              </div>
            )}
          </div>
        }
      />
      <div className="relative top-40 grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
