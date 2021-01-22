import axios from 'axios'

import { config } from '../config'

export async function getAllVariant(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/variants`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function createVariant(datacategory) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/variants`, datacategory, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
