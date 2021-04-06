import {
  FETCHING_HISTORY,
  SUCCESS_FETCHING_HISTORY,
  START_FETCHING_HISTORY,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from './constants'

const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 10,
  keyword: '',
  datasingle: {},
  limit: '',
  tags: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_FETCHING_HISTORY:
      console.log('action')
      console.log(action)
      return {
        ...state,
        data: action.data,
        totalItems: action.count,
      }

    case SET_KEYWORD:
      return { ...state, keyword: action.keyword, category: '' }

    case SET_LIMIT:
      return { ...state, perPage: action.limit }

    case SET_PAGE:
      return { ...state, currentPage: action.currentPage }

    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 }

    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 }

    default:
      return state
  }
}
