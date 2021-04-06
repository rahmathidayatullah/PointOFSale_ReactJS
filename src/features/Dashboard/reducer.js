import {
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
  ERROR_FETCHING_DASHBOARD,
  SET_KEYWORD,
  SUCCESS_FETCHING_DAYAGO,
  SET_DAY_AGO,
  SUCCESS_FETCHING_WEEKAGO,
  SUCCESS_FETCHING_MONTHAGO,
  SET_WEEK_AGO,
  SET_MONTH_AGO,
  SUCCESS_GET_SIGMANOW,
} from './constans'

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

function GetFormattedDate() {
  let value = new Date()
  let dataMonth = value.getMonth()
  let dataDate = value.getDate()
  let dataYear = value.getFullYear()

  if (dataMonth < 10 && dataDate < 10) {
    dataYear = value.getFullYear()
    let date = `${dataYear}-0${dataMonth + 1}-0${dataDate}`
    return date
  } else if (dataMonth < 10 && dataDate > 9) {
    let dataYear = value.getFullYear()
    let date = `${dataYear}-0${dataMonth + 1}-${dataDate}`
    return date
  } else if (dataMonth > 9 && dataDate < 10) {
    let dataYear = value.getFullYear()
    let date = `${dataYear}-${dataMonth + 1}-0${dataDate}`
    return date
  } else {
    let dataYear = value.getFullYear()
    let date = `${dataYear}-${dataMonth + 1}-${dataDate}`
    return date
  }
}

const initialState = {
  keyDashboard: GetFormattedDate(),
  keyDayAgo: GetFormattedDate(),
  keyWeekAgo: GetFormattedDate(),
  keyMonthAgo: GetFormattedDate(),
  dataDashboard: [],

  dataDayNow: 0,
  dataWeekNow: 0,
  dataMonthNow: 0,
  dataDayAgo: 0,
  dataWeekAgo: 0,
  dataMonthAgo: 0,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // get today active
    case START_FETCHING_DASHBOARD:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_DASHBOARD:
      return {
        ...state,
        status: statuslist.success,
        dataDashboard: action.data,
      }
    case SUCCESS_FETCHING_DAYAGO:
      return {
        ...state,
        status: statuslist.success,
        dataDayAgo: action.data,
      }
    case SUCCESS_FETCHING_WEEKAGO:
      return {
        ...state,
        status: statuslist.success,
        dataWeekAgo: action.data,
      }
    case SUCCESS_FETCHING_MONTHAGO:
      return {
        ...state,
        status: statuslist.success,
        dataMonthAgo: action.data,
      }

    case ERROR_FETCHING_DASHBOARD:
      return { ...state, status: statuslist.error }

    // global
    case SET_KEYWORD:
      return { ...state, keyDashboard: action.date }

    // global
    case SET_DAY_AGO:
      return { ...state, keyDayAgo: action.date }
    // global
    case SET_WEEK_AGO:
      return { ...state, keyWeekAgo: action.date }
    case SET_MONTH_AGO:
      return { ...state, keyMonthAgo: action.date }
    case SUCCESS_GET_SIGMANOW:
      return {
        ...state,
        dataDayNow: action.sigmaTodaysIncome,
        dataWeekNow: action.sigmaWeeklyIncome,
        dataMonthNow: action.sigmaMonthlyIncome,
      }

    default:
      return state
  }
}
