import debounce from 'debounce-promise'

import { SUCCESS_FETCHING_VARIANT } from './constants'
import { getAllVariant } from '../../api/variants'
// import { successFetchingVariant } from '../Category/action'

let debouncedFetchVariant = debounce(getAllVariant, 0)

export const fetchVariant = () => {
  return async (dispatch, getState) => {
    // dispatch(startFetchingVariant())
    let perPage = getState().category.perPage || 9
    let currentPage = getState().category.currentPage || 1
    let keyword = getState().category.keyword || ''

    const params = {
      limit: perPage,
      skip: currentPage * perPage - perPage,
      q: keyword,
    }

    try {
      let {
        data: { data },
      } = await debouncedFetchVariant(params)
      dispatch(successFetchingVariant(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// export const startFetchingVariant = () => {
//   return {
//     type: START_FETCHING_VARIANT,
//   }
// }

export const successFetchingVariant = (data) => {
  return {
    type: SUCCESS_FETCHING_VARIANT,
    data,
  }
}
