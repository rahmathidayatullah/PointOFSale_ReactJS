import axios from 'axios'
import { config } from '../config'

// get data date count price

export async function getDataDashboard(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/dashboard`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

// get data statistic
export async function getDataStatistic(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/dashboard/sales-statistics`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
