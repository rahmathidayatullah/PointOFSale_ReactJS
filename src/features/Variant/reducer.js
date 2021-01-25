import { SUCCESS_FETCHING_VARIANT, START_EDIT_VARIANT } from './constants'

const initialState = {
  data: [],
  datasingle: {},
  status: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case START_FETCHING_VARIANT:
    //   return { ...state }

    case SUCCESS_FETCHING_VARIANT:
      return { ...state, data: action.data, status: true }

    case START_EDIT_VARIANT:
      return { ...state, datasingle: action.data, status: false }

    default:
      return state
  }
}
