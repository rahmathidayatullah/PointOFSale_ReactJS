import { START_FETCHING_ORDER, SUCCESS_FETCHING_ORDER } from './constants'

import { createOrder } from '../../api/order'

export const fetchingorder = (data) => {
  return async (dispatch, getState) => {
    dispatch(startfetchingorder())

    try {
      let datar = await createOrder(data)
      dispatch(successfetchingOrder())
      console.log('datar', datar)
    } catch (error) {
      console.log('error', error)
    }
  }
}

export const startfetchingorder = () => {
  return {
    type: START_FETCHING_ORDER,
  }
}

export const successfetchingOrder = () => {
  return {
    type: SUCCESS_FETCHING_ORDER,
  }
}
