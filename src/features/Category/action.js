import debounce from 'debounce-promise'

import {
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SUCCESS_FETCHING_CATEGORY,
  START_FETCHING_SINGLE,
  SUCCESS_EDIT,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from './constants'

import { getAllCategory, editCategory } from '../../api/categories'

let debouncedFetchCategory = debounce(getAllCategory, 1000)

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCategory())

    let keyword = getState().category.keyword || ''
    let limit = getState().category.limit || ''
    let perPage = getState().category.perPage || 1
    let currentPage = getState().category.currentPage || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
    }

    try {
      let {
        data: { data, count },
      } = await debouncedFetchCategory(params)
      dispatch(successFetchingCategory({ data, count }))
    } catch (error) {}
  }
}

export const fetchSingleCategory = (item) => {
  return {
    type: START_FETCHING_SINGLE,
    item,
  }
}

export const startFetchingCategory = () => {
  return {
    type: START_FETCHING_CATEGORY,
  }
}

export const successFetchingCategory = (payload) => {
  return {
    type: SUCCESS_FETCHING_CATEGORY,
    ...payload,
  }
}

export const fetchEditCategory = (data, idsingle) => {
  return async (dispatch, getState) => {
    try {
      let { datar } = await editCategory(data, idsingle)
      dispatch(succesEdit())
    } catch (error) {
      console.log(error)
    }
  }
}

export const errorFetchingCategory = () => {
  return {
    type: ERROR_FETCHING_CATEGORY,
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
