import {
  START_FETCHING_DISCOUNT,
  ERROR_FETCHING_DISCOUNT,
  SUCCESS_FETCHING_DISCOUNT,
  START_FETCHING_SINGLE,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SUCCESS_EDIT,
  CHANGE_FORM,
  CHANGE_FORM_TO_DP,
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
  perPage: 10,
  keyword: '',
  status: statuslist.idle,
  datasingle: {},
  limit: '',
  statusedit: 'add',
  showform: 'add product',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_DISCOUNT:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_DISCOUNT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      }

    case ERROR_FETCHING_DISCOUNT:
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

    case CHANGE_FORM:
      return { ...state, showform: '' }

    case CHANGE_FORM_TO_DP:
      return { ...state, showform: 'add product' }

    default:
      return state
  }
}
