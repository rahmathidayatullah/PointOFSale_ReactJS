import axios from 'axios'

import { config } from '../config'

export async function getAllCategory(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/categories`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSinglecategory(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/categories/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const deleteCategory = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return async () => {
    try {
      const del = await axios.delete(
        `${config.api_host}/api/categories/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      console.log('RESPONSE DELETE', del)
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const editCategory = async (data, datasingle) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(
    `${config.api_host}/api/categories/${datasingle}`,
    data,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )
}

export async function createCategory(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/categories`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
