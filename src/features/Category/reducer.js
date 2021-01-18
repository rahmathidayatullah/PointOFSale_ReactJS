import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  SET_PAGE,
  SET_KEYWORD,
  NEXT_PAGE,
  PREV_PAGE,
  DELETE_ITEM,
  START_EDIT_CATEGORY,
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
  perPage: 6,
  keyword: '',
  status: statuslist.idle,
  datasingle: {},
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // tangani `START_FETCHING_CATEGORY`
    case START_FETCHING_CATEGORY:
      return { ...state, status: statuslist.process }

    case START_EDIT_CATEGORY:
      return { ...state, datasingle: action.data }

    // tangani `ERROR_FETCHING_CATEGORY`
    case ERROR_FETCHING_CATEGORY:
      return { ...state, status: statuslist.error }

    // tangani `SUCCESS_FETCHING_CATEGORY`
    case SUCCESS_FETCHING_CATEGORY:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,

        // totalItems: action.count,
      }

    // tangani `SUCCESS_FETCHING_CATEGORY`
    case DELETE_ITEM:
      // return {

      //   // totalItems: action.count,
      // }

      return {
        ...state,
        data: action.data,
      }

    // case REMOVE_ITEM:
    //   return state
    //     .map((item) => ({
    //       ...item,
    //       qty: item._id === action.item._id ? item.qty - 1 : item.qty,
    //     }))
    //     .filter((item) => item.qty > 0)

    case SET_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_KEYWORD:
      return { ...state, keyword: action.keyword, tags: [] }

    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 }

    case PREV_PAGE:
      return { ...state, currentPage: state.currentPage - 1 }

    default:
      return state
  }
}
