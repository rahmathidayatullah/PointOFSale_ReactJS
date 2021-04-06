import axios from 'axios'

import { config } from '../config'

export async function getAllUser(params) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/user`, {
    params,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function getSingleuser(id) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.get(`${config.api_host}/api/user/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export const deleteUser = (id) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return async () => {
    try {
      const del = await axios.delete(`${config.api_host}/api/delete/${id}`, {
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
export const editUser = async (data, datasingle) => {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.put(`${config.api_host}/api/user/${datasingle}`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}

export async function createUser(data) {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  return await axios.post(`${config.api_host}/api/register`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
}
