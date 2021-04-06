import axios from 'axios'

import { config } from '../config'

export async function createOrder(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/order/`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
