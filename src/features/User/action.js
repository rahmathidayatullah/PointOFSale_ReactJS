import debounce from 'debounce-promise'

import {
  START_FETCHING_USER,
  ERROR_FETCHING_USER,
  SUCCESS_FETCHING_USER,
  START_FETCHING_SINGLE,
  SUCCESS_EDIT,
  SET_KEYWORD,
  SET_LIMIT,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from './constants'

import { getAllUser, editUser } from '../../api/user'

let debouncedFetchUser = debounce(getAllUser, 1000)

export const fetchUser = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingUser())

    let keyword = getState().user.keyword || ''
    let limit = getState().user.limit || ''
    let perPage = getState().user.perPage || 1
    let currentPage = getState().user.currentPage || 1

    const params = {
      q: keyword,
      limit: limit === '' ? perPage : limit,
      skip: currentPage * perPage - perPage,
    }

    try {
      let {
        data: { data, count },
      } = await debouncedFetchUser(params)
      dispatch(successFetchingUser({ data, count }))
    } catch (error) {}
  }
}

export const fetchSingleUser = (item) => {
  return {
    type: START_FETCHING_SINGLE,
    item,
  }
}

export const startFetchingUser = () => {
  return {
    type: START_FETCHING_USER,
  }
}

export const successFetchingUser = (payload) => {
  return {
    type: SUCCESS_FETCHING_USER,
    ...payload,
  }
}

export const fetchEditUser = (data, idsingle) => {
  return async (dispatch, getState) => {
    try {
      let { datar } = await editUser(data, idsingle)
      dispatch(succesEdit())
    } catch (error) {
      console.log(error)
    }
  }
}

export const errorFetchingUser = () => {
  return {
    type: ERROR_FETCHING_USER,
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
