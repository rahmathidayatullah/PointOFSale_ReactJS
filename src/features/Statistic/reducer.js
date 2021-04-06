import {
  START_FETCHING_STATISTIC,
  ERROR_FETCHING_STATISTIC,
  SUCCESS_FETCHING_STATISTIC,
  SUCCESS_FETCHING_STATISTIC_PRODUK,
  SET_CATEGORY,
  SET_PRODUK,
  SET_DATE,
} from './constants'

import moment from 'moment'

let dateNow = moment().format('YYYY-MM-DD')

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}

const initialState = {
  dataCategory: [],
  dataProduk: [],
  keyDate: dateNow,
  keyCategory: '',
  keyProduct: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_STATISTIC:
      return { ...state, status: statuslist.process }

    case SUCCESS_FETCHING_STATISTIC:
      return {
        ...state,
        status: statuslist.success,
        dataCategory: action.data,
        // keyCategory: action.count,
      }
    case SUCCESS_FETCHING_STATISTIC_PRODUK:
      return {
        ...state,
        status: statuslist.success,
        dataProduk: action.data,
        // keyCategory: action.count,
      }

    case ERROR_FETCHING_STATISTIC:
      return { ...state, status: statuslist.error }
    case SET_CATEGORY:
      return { ...state, keyCategory: action.category }
    case SET_PRODUK:
      return { ...state, keyProduct: action.produk }
    case SET_DATE:
      return { ...state, keyDate: action.date }

    default:
      return state
  }
}
