// let initialState = { user: null, token: null }
import { USER_LOGIN, USER_LOGOUT } from './constants'

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { user: null, token: null }
console.log('initialState', initialState)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    //logika menangani login
    case USER_LOGIN:
      return { user: action.user, token: action.token }

    //logika menangani logout
    case USER_LOGOUT:
      return { user: null, token: null }

    default:
      return state
  }
}
