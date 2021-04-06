import {
  START_FETCHING_USER,
  ERROR_FETCHING_USER,
  SUCCESS_FETCHING_USER,
  START_FETCHING_SINGLE,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SUCCESS_EDIT,
} from './constants'

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}
const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 3,
  keyword: '',
  status: statuslist.idle,
  datasingle: {},
  limit: '',
  statusedit: 'add',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_USER:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_USER:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      }

    case ERROR_FETCHING_USER:
      return { ...state, status: statuslist.error }

    case START_FETCHING_SINGLE:
      return { ...state, datasingle: action.item, statusedit: 'edit' }

    case SET_KEYWORD:
      return { ...state, keyword: action.keyword }

    case SET_LIMIT:
      return { ...state, perPage: action.limit }

    case SET_PAGE:
      return { ...state, currentPage: action.currentPage }

    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 }

    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 }

    case SUCCESS_EDIT:
      return { ...state, statusedit: 'add' }
    default:
      return state
  }
}
