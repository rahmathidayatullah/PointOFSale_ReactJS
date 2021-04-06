import { getCart, saveCart } from '../../api/cart'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEMS,
  SET_ITEMS,
  // FETCHING_DATA_CART,
  SUCCESS_FETCHING_CART,
  DELELTE_VARIANT_OPTION,
} from './constants'

// export function addItem(token, cartsemi) {
//   // console.log('data ynag dikirim', cartsemi)
//   return async (dispatch, getState) => {
//     try {
//       console.log('token,cartsemi', token, cartsemi)
//       let { data } = await saveCart(token, cartsemi)
//       console.log('data', data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const fetchingDataCart = () => {
  return async (dispatch, getState) => {
    try {
      let data = await getCart()
      dispatch(successfetching(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const successfetching = (data) => {
  return {
    type: SUCCESS_FETCHING_CART,
    data,
  }
}

export const deleteVariantOptionById = (items) => {
  // console.log(id)
  let id = items.idVariantOption
  console.log('id', id)
  console.log(id)
  return {
    type: DELELTE_VARIANT_OPTION,
    id,
  }
}

export function addItem(cartsemi) {
  console.log('itemmmmmmmsss', cartsemi)
  if (cartsemi === undefined) {
    console.log('data keranjang kosong')
    return {
      type: ADD_ITEM,
      cartsemi,
    }
  } else {
    return {
      type: ADD_ITEM,
      cartsemi,
    }
  }
}

export function removeItem(cartsemi) {
  return {
    type: REMOVE_ITEM,
    cartsemi,
  }
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS,
  }
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  }
}
