import axios from 'axios'

import { config } from '../config'

export async function getAllVariant(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/variant`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSinglevariant(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/variant/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function editVariant(dataCategory, id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(`${config.api_host}/api/variant/${id}`, dataCategory, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
  // console.log('data')
}

export async function createVariant(datacategory) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/variant`, datacategory, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const deleteVariant = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return async () => {
    try {
      const del = await axios.delete(`${config.api_host}/api/variant/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      console.log('RESPONSE DELETE', del)
    } catch (error) {
      console.log(error.response)
    }
  }
}
