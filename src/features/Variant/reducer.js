import {
  START_FETCHING_VARIANT,
  ERROR_FETCHING_VARIANT,
  SUCCESS_FETCHING_VARIANT,
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
const statusedit = {
  idle: 'idle',
  add: 'add',
  edit: 'edit',
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
  status2: statusedit.idle,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_VARIANT:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_VARIANT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      }

    case ERROR_FETCHING_VARIANT:
      return { ...state, status: statuslist.error }

    case START_FETCHING_SINGLE:
      return { ...state, datasingle: action.item, status2: statusedit.edit }

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
      return { ...state, status2: statusedit.add }

    default:
      return state
  }
}
