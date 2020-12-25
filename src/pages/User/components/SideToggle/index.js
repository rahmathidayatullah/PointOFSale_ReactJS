import React, { useState } from 'react'
import Next from '../../../../assets/img/next.svg'
import SubNext from '../../../../assets/img/subnext.svg'
import Finish from '../../../../assets/img/finish.svg'
import Shop from '../../../../assets/img/shop.svg'
import NextFoot from '../../../../assets/img/nexttt.svg'
import BackFoot from '../../../../assets/img/backkk.svg'
import Qty from '../SideToggle/Qty'
import DetailOrder from '../SideToggle/DetailOrder'
import PageFinish from '../SideToggle/Finish'

export default function () {
  const [counter, setCounter] = useState(1)
  const [position, setPosition] = useState('-33%')

  const handleNext = () => {
    setCounter(counter + 1)
    if (counter === 3) {
      setCounter(counter + 0)
    }
  }
  const handleBack = () => {
    setCounter(counter - 1)
    if (counter <= 1) {
      setCounter(counter - 0)
    }
  }

  return (
    <div className="overlay overflow-hidden">
      <div
        className="fixed top-0 h-screen bg-white p-4 right-0 w-4/12 z-40 bg-side"
        style={{ right: position }}
      >
        <div
          className="absolute rounded-xl p-4 bg-side cursor-pointer RealtiveCenterY text-white"
          style={{ left: '-13%', top: '38%' }}
          onClick={() =>
            position === '-33%' ? setPosition('0') : setPosition('-33%')
          }
        >
          <img src={Shop} />
        </div>
        <div className="flex justify-between pb-4 border-b border-white items-center">
          <p className="font-bold text-xl">My Cart</p>
          <div className="flex flex-row items-center bg-subSide p-3">
            <img src={Next} />
            <div className="ml-5 flex items-center mr-3">
              <p
                className={
                  counter === 1 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Qty
              </p>
              <img src={SubNext} />
            </div>
            <div className="flex items-center mr-3">
              <p
                className={
                  counter === 2 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Detail Order
              </p>

              <img src={SubNext} />
            </div>
            <div className="flex items-center">
              <p
                className={
                  counter === 3 ? 'mr-2 text-sm text-white' : 'mr-2 text-sm'
                }
              >
                Finish
              </p>

              <img src={Finish} />
            </div>
          </div>
        </div>
        {/* <p>{counter}</p> */}

        {counter === 1 ? <Qty /> : ''}
        {counter === 2 ? <DetailOrder /> : ''}
        {counter === 3 ? <PageFinish /> : ''}

        {counter === 1 ? (
          <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-end w-full shadowOrange">
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              onClick={handleNext}
            >
              <p className="relative bottom-1"> Next</p>
              <img className="ml-3" src={NextFoot} />
            </button>
          </div>
        ) : (
          ''
        )}
        {counter === 2 ? (
          <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-between w-full shadowOrange">
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              onClick={handleBack}
            >
              <p className="relative bottom-1"> Back</p>
              <img className="ml-3" src={BackFoot} />
            </button>
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              onClick={handleNext}
            >
              <p className="relative bottom-1"> Next</p>
              <img className="ml-3" src={NextFoot} />
            </button>
          </div>
        ) : (
          ''
        )}
        {counter === 3 ? (
          <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-between w-full shadowOrange">
            <button
              className="py-2 text-2xl px-4 text-white bg-yellow-600 rounded-xl flex items-center"
              onClick={handleBack}
            >
              <p className="relative bottom-1"> Back</p>
              <img className="ml-3" src={BackFoot} />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
