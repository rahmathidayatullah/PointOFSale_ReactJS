import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  START_FETCHING_SINGLE,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SUCCESS_EDIT,
  TOGGLE_TAG,
  SET_TAGS,
  SET_CATEGORY,
  FETCHING_ASC,
  FETCHING_DESC,
  FETCHING_TIMENEWS,
  SET_DATASEMI_CART,
} from './constant'

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
  tags: [],
  category: '',
  sort: 0,
  time: 0,
  datacart: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_PRODUCT:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      }

    case ERROR_FETCHING_PRODUCT:
      return { ...state, status: statuslist.error }

    case START_FETCHING_SINGLE:
      return { ...state, datasingle: action.item, statusedit: 'edit' }

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

    case SUCCESS_EDIT:
      return { ...state, statusedit: 'add' }

    case SET_CATEGORY:
      return { ...state, category: action.cate, keyword: '' }

    case FETCHING_ASC:
      return { ...state, sort: action.data }

    case FETCHING_DESC:
      return { ...state, sort: action.data }

    case FETCHING_TIMENEWS:
      return { ...state, time: action.data, sort: 0 }

    case SET_DATASEMI_CART:
      return { ...state, datacart: [action.cartsemi] }

    default:
      return state
  }
}
