import React, { useState } from 'react'
import CardBestSeller from '../../components/Dashboard/CardBestSeller'
import Statistik from '../../components/Dashboard/Statistik'
import ReportDate from '../../components/Dashboard/ReportDate'
import ImgText from '../../components/Dashboard/ImgText'
import WricthWatch from '../../assets/img/admin/ic-clock.svg'
import Calender from 'react-calendar'
import { useDispatch, useSelector } from 'react-redux'
import {
  getDashboard,
  getDayAgo,
  getWeekAgo,
  getMonthAgo,
  setDateNow,
  setDayAgo,
  setWeekAgo,
  setMonthAgo,
} from '../../features/Dashboard/action'
import moment from 'moment'
import { setDate } from '../../features/Statistic/action'

export default function Dashboard() {
  let dispatch = useDispatch()
  let datadashboard = useSelector((state) => state.dashboard)
  console.log('datadashboard', datadashboard)

  let sigmaDayNow = useSelector((state) => state.dashboard.dataDayNow)
  let sigmaWeekNow = useSelector((state) => state.dashboard.dataWeekNow)
  let sigmaMonthNow = useSelector((state) => state.dashboard.dataMonthNow)

  let dataDayAgo = useSelector((state) => state.dashboard.dataDayAgo)
  let dataWeekAgo = useSelector((state) => state.dashboard.dataWeekAgo)
  let dataMonthAgo = useSelector((state) => state.dashboard.dataMonthAgo)
  const getSigmaDay = () => {
    if (sigmaDayNow !== 0 && dataDayAgo === 0) {
      return `+ 100%`
    } else if (sigmaDayNow === 0 && dataDayAgo !== 0) {
      return '+ 0%'
    } else if (sigmaDayNow === 0 && dataDayAgo === 0) {
      return ''
    } else {
      if (sigmaDayNow > dataDayAgo) {
        return `+ ${(sigmaDayNow * 100) / dataDayAgo} Yesterday`
      } else {
        return `- ${(sigmaDayNow * 100) / dataDayAgo}% Yesterday`
      }
    }
  }
  const getSigmaMonth = () => {
    if (sigmaMonthNow !== 0 && dataMonthAgo === 0) {
      return `+ 100%`
    } else if (sigmaMonthNow === 0 && dataMonthAgo !== 0) {
      return '+ 0%'
    } else if (sigmaMonthNow === 0 && dataMonthAgo === 0) {
      return ''
    } else {
      if (sigmaMonthNow > dataMonthAgo) {
        return `+ ${(sigmaMonthNow * 100) / dataMonthAgo} Last Month`
      } else {
        return `- ${(sigmaMonthNow * 100) / dataMonthAgo}% Last Month`
      }
    }
  }
  const getSigmaWeek = () => {
    if (sigmaWeekNow !== 0 && dataWeekAgo === 0) {
      return `+ 100%`
    } else if (sigmaWeekNow === 0 && dataWeekAgo !== 0) {
      return '+ 0%'
    } else if (sigmaWeekNow === 0 && dataWeekAgo === 0) {
      return ''
    } else {
      if (sigmaWeekNow > dataWeekAgo) {
        return `+ ${(sigmaWeekNow * 100) / dataWeekAgo} Last Week`
      } else {
        return `- ${(sigmaWeekNow * 100) / dataWeekAgo}% Last Week`
      }
    }
  }

  console.log('getSigmaDay', getSigmaDay())

  // state calender value
  const [valueDay, setValueDay] = useState()

  // onChange calender
  const onChangeDay = (value) => {
    let dateNow = moment(value).format('YYYY-MM-DD')
    let dateBeforeDay = moment(value).add(-1, 'day').format('YYYY-MM-DD')
    console.log('dateBeforeDay', dateBeforeDay)
    let dateBeforeWeek = moment(value).add(-1, 'week').format('YYYY-MM-DD')
    let dateBeforeMonth = moment(value).add(-1, 'month').format('YYYY-MM-DD')

    //start dispatch for reduce statistic
    dispatch(setDate(dateNow))
    //end dispatch for reduce statistic
    dispatch(setDateNow(dateNow))
    dispatch(setDayAgo(dateBeforeDay))
    dispatch(setWeekAgo(dateBeforeWeek))
    dispatch(setMonthAgo(dateBeforeMonth))
  }

  React.useEffect(() => {
    dispatch(getDashboard())
    dispatch(getDayAgo())
    dispatch(getWeekAgo())
    dispatch(getMonthAgo())
  }, [
    dispatch,
    datadashboard.keyDashboard,
    datadashboard.keyDayAgo,
    datadashboard.keyWeekAgo,
    datadashboard.keyMonthAgo,
    valueDay,
  ])
  return (
    <div className="flex bg-white p-5">
      <div className="w-3/5">
        <ReportDate
          persentaseDayBefore={getSigmaDay()}
          persentaseWeekBefore={getSigmaWeek()}
          persentaseMonthBefore={getSigmaMonth()}
          day={
            datadashboard.dataDashboard.length === 0
              ? ''
              : datadashboard.dataDashboard.data_sigma.sigmaTodaysIncome
          }
          week={
            datadashboard.dataDashboard.length === 0
              ? ''
              : datadashboard.dataDashboard.data_sigma.sigmaWeeklyIncome
          }
          month={
            datadashboard.dataDashboard.length === 0
              ? ''
              : datadashboard.dataDashboard.data_sigma.sigmaMonthlyIncome
          }
        />
        <CardBestSeller />

        <Statistik />
      </div>
      <div className="w-2/5 ml-4">
        <div className="rounded-xl shadow-xl flex flex-col p-5 bg-white">
          <div className="flex flex-col pb-3 border-b">
            <p className="font-normal text-xl">
              Cashier <span className="font-bold text-green-500">Online</span>
            </p>
          </div>
          {datadashboard.dataDashboard.length === 0
            ? ''
            : datadashboard.dataDashboard.data_user.map((item) => {
                return <ImgText nama={item.name} namaCasir={item.status} />
              })}
        </div>
        <div className="rounded-xl bg-white shadow-lg flex items-center justify-between mt-5 px-5 py-2">
          <p className="font-bold text-red-500 text-xl">Todays's</p>
          <div className="w-0.5 h-10 bg-gray-200"></div>
          <p className="text-xl">00:07:30:00 AM</p>
          <img src={WricthWatch} />
        </div>
        <div className="rounded-lg shadow-lg bg-white p-5 mt-5">
          <Calender onChange={onChangeDay} value={valueDay} />
        </div>
      </div>
    </div>
  )
}
