import debounce from 'debounce-promise'

import {
  SUCCESS_FETCHING_CATEGORY,
  START_FETCHING_CATEGORY,
  ERROR_FETCHING_CATEGORY,
  SET_PAGE,
  SET_KEYWORD,
  PREV_PAGE,
  NEXT_PAGE,
  DELETE_ITEM,
  START_EDIT_CATEGORY,
} from './constants'

import { getAllCategory } from '../../api/categories'
import { deleteCategory } from '../../api/categories'
// import { editCategory } from '../../api/categories'
import { getSinglecategoryy } from '../../api/categories'

// bungkus `getCategory` dengan `debounce`
let debouncedFetchCategory = debounce(getAllCategory, 0)
let debouncedDeleteCategory = debounce(deleteCategory, 0)

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCategory())

    let perPage = getState().category.perPage || 9
    let currentPage = getState().category.currentPage || 1
    let keyword = getState().category.keyword || ''

    const params = {
      limit: perPage,
      skip: currentPage * perPage - perPage,
      q: keyword,
    }

    try {
      let { data } = await debouncedFetchCategory(params)
      console.log('cinta')
      dispatch(successFetchingCategory(data))
    } catch (error) {
      dispatch(errorFetchingCategory())
    }
  }
}

export const getSinglecategory = (items) => {
  let id = items._id
  return async (dispatch, getstate) => {
    try {
      let { data } = await getSinglecategoryy(id)

      dispatch(startEditCategory(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// useEffect

export const startFetchingCategory = () => {
  return {
    type: START_FETCHING_CATEGORY,
  }
}
// export const startFetchingCategory = () => {
//   return {
//     type: START_FETCHING_CATEGORY,
//   }
// }
export const startEditCategory = (data) => {
  return {
    type: START_EDIT_CATEGORY,
    data,
  }
}

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    try {
      let { data } = await debouncedDeleteCategory(id)
      dispatch(successFetchingCategory(data))
    } catch (error) {}
  }
}

export const startdeleteCategoryy = (data) => {
  return {
    type: DELETE_ITEM,
    data,
  }
}

export const successFetchingCategory = (data) => {
  return {
    type: SUCCESS_FETCHING_CATEGORY,
    data,
  }
}

export const errorFetchingCategory = () => {
  return {
    type: ERROR_FETCHING_CATEGORY,
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

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  }
}
