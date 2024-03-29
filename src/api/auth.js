import axios from 'axios'

import { config } from '../config'

export async function registerUser(data) {
  return await axios.post(`${config.api_host}/auth/register`, data)
}

export async function login(email, password) {
  return await axios.post(`${config.api_host}/api/login`, { email, password })
}

export async function logout() {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}
  return await axios
    .post(`${config.api_host}/api/logout`, null, {
      header: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      localStorage.removeItem('auth')
      return response
    })
}

//Pada fungsi logout ini agak sedikit berbeda, karena kita perlu juga mengirimkan token supaya server Express bisa mengenali ini user yang mana yang minta logout. token tersebut langsung kita baca dari Local Storage karena di sini kita tidak bisa mengakses Redux Store, kenapa? karena ini fungsi biasa bukan custom hook, komponen maupun Redux action.Setelah itu kita gunakan token tersebut pada headers authorization sebagai Bearer token.Jika response sukses diterima dari server maka kita hapus item auth di LocalStorage dengan localStorage.removeITem('auth');
