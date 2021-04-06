import { SHOW_MODAL, HIDE_MODAL } from './constants'

const inisialState = {
  status: false,
}

export default function reducer(state = inisialState, action) {
  switch (action.type) {
    case HIDE_MODAL:
      return { ...state, status: false }

    case SHOW_MODAL:
      return { ...state, status: true }

    default:
      return state
  }
}
