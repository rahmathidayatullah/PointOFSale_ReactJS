import debounce from 'debounce-promise'

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

import { getAllVariant, editVariant } from '../../api/variants'

let debouncedFetchVariant = debounce(getAllVariant, 1000)

export const fetchVariant = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingVariant())

    let keyword = getState().variant.keyword || ''
    let limit = getState().variant.limit || ''
    let perPage = getState().variant.perPage || 1
    let currentPage = getState().variant.currentPage || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
    }

    try {
      console.log('dataaaaa cek')
      let {
        data: { data, count },
      } = await debouncedFetchVariant(params)
      console.log('data', data)
      dispatch(successFetchingVariant({ data, count }))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchingEditvariant = (dataCategory, id) => {
  return async (dispatch, getState) => {
    try {
      let { datar } = await editVariant(dataCategory, id)
      console.log('datar', datar)

      dispatch(succesEdit())
    } catch (error) {
      console.log('respon', error)
    }
  }
}

export const succesEdit = () => {
  return {
    type: SUCCESS_EDIT,
  }
}

export const fetchSingleVariant = (item) => {
  return {
    type: START_FETCHING_SINGLE,
    item,
  }
}

export const startFetchingVariant = () => {
  return {
    type: START_FETCHING_VARIANT,
  }
}

export const successFetchingVariant = (payload) => {
  return {
    type: SUCCESS_FETCHING_VARIANT,
    ...payload,
  }
}

export const errorFetchingVariant = () => {
  return {
    type: ERROR_FETCHING_VARIANT,
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
