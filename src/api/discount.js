import axios from 'axios'

import { config } from '../config'

export async function getAllDiscount(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/discount`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSinglediscoutn(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/discount/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const deleteDiscount = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return async () => {
    try {
      const del = await axios.delete(`${config.api_host}/api/discount/${id}`, {
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
export const editDiscount = async (data, datasingle) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(
    `${config.api_host}/api/discount/${datasingle}`,
    data,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )
}

export async function createDiscount(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/discount`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function addProductToDiscount(diskonId, dataProduct) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(
    `${config.api_host}/api/discount/push-product/${diskonId}`,
    dataProduct,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )
}
