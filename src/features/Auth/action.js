//import constants
import { USER_LOGIN, USER_LOGOUT } from './constants'

// action userlogin
export function userLogin(user, token) {
  return {
    type: USER_LOGIN,
    user,
    token,
  }
}

// action logout
export function userLogout() {
  return {
    type: USER_LOGOUT,
  }
}
