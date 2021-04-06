import { HIDE_MODAL, SHOW_MODAL } from './constants'

export const hideModal = (status) => {
  return {
    type: HIDE_MODAL,
    status,
  }
}

export const showModal = (status) => {
  return {
    type: SHOW_MODAL,
    status,
  }
}
