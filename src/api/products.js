import axios from 'axios'

import { config } from '../config'

export async function getAllProducts(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/products`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSingleProduct(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/products${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function createProduct() {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/products`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function updateProduct(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(`${config.api_host}/api/products/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function deleteProduct(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.delete(`${config.api_host}/api/products/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
