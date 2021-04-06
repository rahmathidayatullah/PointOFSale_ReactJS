import { successfetching } from '../Cart/actions'
import {
  FETCHING_HISTORY,
  SUCCESS_FETCHING_HISTORY,
  START_FETCHING_HISTORY,
} from './constants'
import debounce from 'debounce-promise'

import { getHistory } from '../../api/history'

let debouncedFetchHistory = debounce(getHistory, 1000)

export const fetchingdataHistory = () => {
  return async (dispatch, getState) => {
    let keyword = getState().history.keyword || ''
    let limit = getState().history.limit || ''
    let perPage = getState().history.perPage || 1
    let currentPage = getState().history.currentPage || 1
    let category = getState().history.category || ''
    let sortirdata = getState().history.sort || 1
    let timesortir = getState().history.time || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
      category,
      sort: sortirdata,
      time: timesortir,
    }

    try {
      let res = await debouncedFetchHistory(params)
      dispatch(
        successFetchingProduct({
          data: res.data.data,
          count: res.data.count,
        })
      )
    } catch (error) {
      console.log('error',error)
    }
  }
}

export const successFetchingProduct = ({ data, count }) => {
  return { type: SUCCESS_FETCHING_HISTORY, data, count }
}
