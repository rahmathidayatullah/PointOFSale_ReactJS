import {
  // day
  START_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DASHBOARD,
  SUCCESS_FETCHING_DAYAGO,
  SUCCESS_FETCHING_WEEKAGO,
  SUCCESS_FETCHING_MONTHAGO,
  ERROR_FETCHING_DASHBOARD,
  //   global
  SET_KEYWORD,
  SET_DAY_AGO,
  SET_WEEK_AGO,
  SET_MONTH_AGO,
  SUCCESS_GET_SIGMANOW,
} from './constans'

import { getDataDashboard } from '../../api/dashboard'

// get date now
export const getDashboard = () => {
  return async (dispatch, getState) => {
    dispatch(startGetDashboard())
    let dataDashboard = getState().dashboard.keyDashboard || ''
    const params = {
      date: dataDashboard,
    }
    try {
      let { data } = await getDataDashboard(params)
      let {
        data: {
          data_sigma: {
            sigmaTodaysIncome,
            sigmaWeeklyIncome,
            sigmaMonthlyIncome,
          },
        },
      } = await getDataDashboard(params)
      dispatch(succesGetDashboard(data))
      dispatch(
        successGetSigmaDateNow({
          sigmaTodaysIncome,
          sigmaWeeklyIncome,
          sigmaMonthlyIncome,
        }),
      )
    } catch (error) {
      console.log('error', error)
      dispatch(errorGetDashboard())
    }
  }
}

// send data to reduce
export const successGetSigmaDateNow = (payload) => {
  return {
    type: SUCCESS_GET_SIGMANOW,
    ...payload,
  }
}
// get day ago
export const getDayAgo = () => {
  return async (dispatch, getState) => {
    dispatch(startGetDashboard())
    let dateDayAgo = getState().dashboard.keyDayAgo || ''

    const params = {
      date: dateDayAgo,
    }
    try {
      let { data } = await getDataDashboard(params)
      dispatch(succesGetDayAgo(data.data_sigma.sigmaTodaysIncome))
    } catch (error) {
      console.log('error', error)
      dispatch(errorGetDashboard())
    }
  }
}
export const getWeekAgo = () => {
  return async (dispatch, getState) => {
    dispatch(startGetDashboard())
    let dateWeekAgo = getState().dashboard.keyWeekAgo || ''

    const params = {
      date: dateWeekAgo,
    }
    try {
      let { data } = await getDataDashboard(params)
      dispatch(succesGetWeekAgo(data.data_sigma.sigmaWeeklyIncome))
    } catch (error) {
      console.log('error', error)
      dispatch(errorGetDashboard())
    }
  }
}
export const getMonthAgo = () => {
  return async (dispatch, getState) => {
    dispatch(startGetDashboard())
    let dateMonthAgo = getState().dashboard.keyMonthAgo || ''

    const params = {
      date: dateMonthAgo,
    }
    try {
      let { data } = await getDataDashboard(params)
      dispatch(succesGetMonthAgo(data.data_sigma.sigmaMonthlyIncome))
    } catch (error) {
      console.log('error', error)
      dispatch(errorGetDashboard())
    }
  }
}

export const startGetDashboard = () => {
  return {
    type: START_FETCHING_DASHBOARD,
  }
}
export const errorGetDashboard = () => {
  return {
    type: ERROR_FETCHING_DASHBOARD,
  }
}

// SUCCESS DAY AGO
export const succesGetDayAgo = (data) => {
  return {
    type: SUCCESS_FETCHING_DAYAGO,
    data,
  }
}
// SUCCESS WEEK AGO
export const succesGetWeekAgo = (data) => {
  return {
    type: SUCCESS_FETCHING_WEEKAGO,
    data,
  }
}
// SUCCESS MONTH AGO
export const succesGetMonthAgo = (data) => {
  return {
    type: SUCCESS_FETCHING_MONTHAGO,
    data,
  }
}

// SUCCESS DATE NOW
export const succesGetDashboard = (data) => {
  return {
    type: SUCCESS_FETCHING_DASHBOARD,
    data,
  }
}

// send date now
export const setDateNow = (date) => {
  // console.log('date', date)
  return {
    type: SET_KEYWORD,
    date,
  }
}

// send date day -1
export const setDayAgo = (date) => {
  // console.log('day Ago', date)
  return {
    type: SET_DAY_AGO,
    date,
  }
}
// send date week -1
export const setWeekAgo = (date) => {
  console.log('Week Ago', date)
  return {
    type: SET_WEEK_AGO,
    date,
  }
}
// send date month -1
export const setMonthAgo = (date) => {
  console.log('Month Ago', date)
  return {
    type: SET_MONTH_AGO,
    date,
  }
}
