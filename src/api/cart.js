import axios from 'axios'
import store from '../app/store'
import { config } from '../config'
import { setItems } from '../features/Cart/actions'

export async function saveCart(token, curretCart) {
  return await axios.put(
    `${config.api_host}/api/cart`,
    { items: curretCart },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  )
}

export async function getCart() {
  let { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {}

  // if (!token) return

  return await axios.get(`${config.api_host}/api/cart`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  // if (!data.error) {
  //   store.dispatch(setItems(data))
  // }
}
