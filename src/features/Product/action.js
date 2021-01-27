import debounce from 'debounce-promise'

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
} from './constant'

import { getAllProducts } from '../../api/products'

let debouncedFetchProduct = debounce(getAllProducts, 1000)

export const fetchProduct = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProduct())

    let keyword = getState().product.keyword || ''
    let limit = getState().product.limit || ''
    let perPage = getState().product.perPage || 1
    let currentPage = getState().product.currentPage || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
    }

    try {
      let {
        data: { data, count },
      } = await debouncedFetchProduct(params)
      console.log('data', data)
      dispatch(successFetchingProduct({ data, count }))
    } catch (error) {}
  }
}

export const fetchSingleProduct = (item) => {
  return {
    type: START_FETCHING_SINGLE,
    item,
  }
}

export const startFetchingProduct = () => {
  return {
    type: START_FETCHING_PRODUCT,
  }
}

export const successFetchingProduct = (payload) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    ...payload,
  }
}

export const errorFetchingProduct = () => {
  return {
    type: ERROR_FETCHING_PRODUCT,
  }
}

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  }
}

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    limit,
  }
}

export const setPage = (number = 1) => {
  return {
    type: SET_PAGE,
    currentPage: number,
  }
}

export const goToNextPage = () => {
  return {
    type: NEXT_PAGE,
  }
}

export const goToPrevPage = () => {
  return {
    type: PREV_PAGE,
  }
}
