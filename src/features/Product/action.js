import debounce from 'debounce-promise'

import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  START_FETCHING_SINGLE,
  SUCCESS_EDIT,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  FETCHING_ASC,
  FETCHING_DESC,
  FETCHING_TIMENEWS,
  SET_CATEGORY,
  SET_DATASEMI_CART,
} from './constant'

import { getAllProducts, updateProduct } from '../../api/products'

let debouncedFetchProduct = debounce(getAllProducts, 1000)

export const fetchProduct = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProduct())

    let keyword = getState().product.keyword || ''
    let limit = getState().product.limit || ''
    let perPage = getState().product.perPage || 1
    let currentPage = getState().product.currentPage || 1
    let category = getState().product.category || ''
    let sortirdata = getState().product.sort || 1
    let timesortir = getState().product.time || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
      category,
      sort: sortirdata,
      time: timesortir,
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

export const setCategory = (cate) => {
  console.log('category', cate)
  return {
    type: SET_CATEGORY,
    cate,
  }
}

export const fetchEditProduct = (data, idsingle) => {
  return async (dispatch, getState) => {
    try {
      let { datar } = await updateProduct(data, idsingle)
      console.log('dataaaaaaaaaaaaaaaaaaaaaa', datar)
      dispatch(succesEdit())
    } catch (error) {
      console.log(error)
    }
  }
}

export const succesEdit = () => {
  return {
    type: SUCCESS_EDIT,
  }
}

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  }
}

export const sortAsc = (data) => {
  console.log('sortAsc', data)
  return {
    type: FETCHING_ASC,
    data,
  }
}

export const sortDesc = (data) => {
  console.log('sortDesc', data)
  return {
    type: FETCHING_DESC,
    data,
  }
}
export const sortTimeNews = (data) => {
  console.log('sortTime', data)
  return {
    type: FETCHING_TIMENEWS,
    data,
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

export const sendDataToCartreduce = (cartsemi) => {
  return {
    type: SET_DATASEMI_CART,
    cartsemi,
  }
}
