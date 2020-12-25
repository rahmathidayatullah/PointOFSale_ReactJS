import React, { useState } from 'react'
import Next from '../../../../assets/img/next.svg'
import SubNext from '../../../../assets/img/subnext.svg'
import Finish from '../../../../assets/img/finish.svg'
import Qty from '../SideToggle/Qty'
import DetailOrder from '../SideToggle/DetailOrder'
import PageFinish from '../SideToggle/Finish'

export default function () {
  const [counter, setCounter] = useState(1)
  const [position, setPosition] = useState('0')

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
        className="absolute top-0 h-screen bg-white p-4 right-0 w-4/12 z-40 bg-side"
        style={{ right: position }}
      >
        <div
          className="absolute p-4 bg-red-500 RealtiveCenterY text-white"
          style={{ left: '-21%', top: '38%' }}
          onClick={() =>
            position === '-21%' ? setPosition('0') : setPosition('-21%')
          }
        >
          Show
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

        <div className="absolute bottom-0 h-20 left-0 px-3 flex items-center justify-between w-full shadowOrange">
          <button
            className="py-2 px-4 text-white bg-yellow-600 rounded-xl"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="py-2 px-4 text-white bg-yellow-600 rounded-xl"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
