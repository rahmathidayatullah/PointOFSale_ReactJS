import { START_FETCHING_ORDER, SUCCESS_FETCHING_ORDER } from './constants'

const initialState = {
  status: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_ORDER:
      return { ...state, status: 'proses' }

    case SUCCESS_FETCHING_ORDER:
      return { ...state, status: 'succes' }

    default:
      return state
  }
}
