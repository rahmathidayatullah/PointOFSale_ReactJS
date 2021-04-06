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

  return await axios.get(`${config.api_host}/api/products/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function createProduct(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/products`, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${token}`,
    },
  })
}

export async function updateProduct(data, idsingle) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(`${config.api_host}/api/products/${idsingle}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

// export async function deleteProduct(id) {
//   let { token } = localStorage.getItem('auth')
//     ? JSON.parse(localStorage.getItem('auth'))
//     : {}

//   return await axios.delete(`${config.api_host}/api/products/${id}`, {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   })
// }

export const deleteProduct = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return async () => {
    try {
      const del = await axios.delete(`${config.api_host}/api/products/${id}`, {
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
