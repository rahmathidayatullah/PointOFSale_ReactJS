import axios from 'axios'
import { config } from '../config'

// get all history
export async function getHistory(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/history`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
