import {
  START_FETCHING_STATISTIC,
  ERROR_FETCHING_STATISTIC,
  SUCCESS_FETCHING_STATISTIC,
  SUCCESS_FETCHING_STATISTIC_PRODUK,
  SET_CATEGORY,
  SET_DATE,
  SET_PRODUK,
} from './constants'

import { getDataStatistic } from '../../api/dashboard'

export const fetchStatisticCategory = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingStatistic())

    let dateCategory = getState().statistic.keyDate || ''
    let Category = getState().statistic.keyCategory || ''

    const params = {
      date: dateCategory,
      category: Category,
    }

    try {
      let {
        data: { data },
      } = await getDataStatistic(params)
      let datar = await getDataStatistic(params)
      console.log('datar', datar)
      dispatch(successFetchingStatistic(data))
    } catch (error) {
      console.log('error :', error)
      dispatch(errorFetchingStatistic())
    }
  }
}

export const fetchStatisticProduk = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingStatistic())

    let dateProduk = getState().statistic.keyDate || ''
    let Produk = getState().statistic.keyProduct || ''

    const params = {
      date: dateProduk,
      product: Produk,
    }

    try {
      let {
        data: { data },
      } = await getDataStatistic(params)
      let datar = await getDataStatistic(params)
      console.log(
        'await getDataStatistic(params)',
        await getDataStatistic(params),
      )
      dispatch(successFetchingStatisticProduk(data))
    } catch (error) {
      console.log('error :', error)
      dispatch(errorFetchingStatistic())
    }
  }
}

export const startFetchingStatistic = () => {
  return {
    type: START_FETCHING_STATISTIC,
  }
}

export const successFetchingStatistic = (data) => {
  return {
    type: SUCCESS_FETCHING_STATISTIC,
    data,
  }
}
export const successFetchingStatisticProduk = (data) => {
  return {
    type: SUCCESS_FETCHING_STATISTIC_PRODUK,
    data,
  }
}

export const errorFetchingStatistic = () => {
  return {
    type: ERROR_FETCHING_STATISTIC,
  }
}

export const setDate = (date) => {
  console.log('date', date)
  return {
    type: SET_DATE,
    date,
  }
}
export const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    category,
  }
}
export const setProduk = (produk) => {
  return {
    type: SET_PRODUK,
    produk,
  }
}
