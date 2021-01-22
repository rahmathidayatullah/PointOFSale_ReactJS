import { SUCCESS_FETCHING_VARIANT, START_FETCHING_VARIANT } from './constants'

const initialState = {
  data: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case START_FETCHING_VARIANT:
    //   return { ...state }

    case SUCCESS_FETCHING_VARIANT:
      return { ...state, data: action.data }

    default:
      return state
  }
}
