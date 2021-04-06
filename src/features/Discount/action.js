import debounce from 'debounce-promise'

import {
  START_FETCHING_DISCOUNT,
  ERROR_FETCHING_DISCOUNT,
  SUCCESS_FETCHING_DISCOUNT,
  START_FETCHING_SINGLE,
  SUCCESS_EDIT,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  CHANGE_FORM,
  CHANGE_FORM_TO_DP,
} from './constants'

import { getAllDiscount, editDiscount } from '../../api/discount'

let debouncedFetchDiscount = debounce(getAllDiscount, 1000)

export const fetchDiscount = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingDiscount())

    let keyword = getState().discount.keyword || ''
    let limit = getState().discount.limit || ''
    let perPage = getState().discount.perPage || 1
    let currentPage = getState().discount.currentPage || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
    }

    try {
      let {
        data: { data, count },
      } = await debouncedFetchDiscount(params)
      dispatch(successFetchingDiscount({ data, count }))
    } catch (error) {}
  }
}

export const fetchSingleDiscount = (item) => {
  return {
    type: START_FETCHING_SINGLE,
    item,
  }
}

export const startFetchingDiscount = () => {
  return {
    type: START_FETCHING_DISCOUNT,
  }
}

export const successFetchingDiscount = (payload) => {
  return {
    type: SUCCESS_FETCHING_DISCOUNT,
    ...payload,
  }
}

export const fetchEditDiscount = (data, idsingle) => {
  return async (dispatch, getState) => {
    try {
      let { datar } = await editDiscount(data, idsingle)
      console.log('datar', datar)
      dispatch(succesEdit())
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const errorFetchingDiscount = () => {
  return {
    type: ERROR_FETCHING_DISCOUNT,
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

export const changeFormDiscount = () => {
  return {
    type: CHANGE_FORM,
  }
}
export const changeFormDiscountToProduct = () => {
  return {
    type: CHANGE_FORM_TO_DP,
  }
}
