// import {
//   ADD_ITEM,
//   REMOVE_ITEM,
//   CLEAR_ITEMS,
//   SET_ITEMS,
//   FETCHING_DATA_CART,
//   SUCCESS_FETCHING_CART,
// } from './constants'

// const initialState = {
//   data: [],
// }

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SUCCESS_FETCHING_CART:
//       return { ...state, data: action.data }

//     default:
//       return state
//   }
// }

import { data } from 'autoprefixer'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  SUCCESS_FETCHING_CART,
  CLEAR_ITEMS,
  SET_ITEMS,
  DELELTE_VARIANT_OPTION,
} from './constants'

// const initialState = []

let initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (action.cartsemi === undefined) {
        return state
      } else if (
        state.find(
          (cartsemi) =>
            cartsemi._id === action.cartsemi._id &&
            cartsemi.variantOption === action.cartsemi.variantOption,
        )
      ) {
        return state.map((cartsemi) => ({
          ...cartsemi,
          qty:
            cartsemi._id === action.cartsemi._id &&
            cartsemi.variantOption === action.cartsemi.variantOption
              ? cartsemi.qty + 1
              : cartsemi.qty,
        }))
      } else {
        return [...state, { ...action.cartsemi, qty: 1 }]
      }

    case REMOVE_ITEM:
      return (
        state
          // kurang qty = 1, berdasarkan id_produk
          .map((cartsemi) => ({
            ...cartsemi,
            qty:
              cartsemi._id === action.cartsemi._id &&
              cartsemi.variantOption === action.cartsemi.variantOption
                ? cartsemi.qty - 1
                : cartsemi.qty,
          }))
          // filter item yang qty lebih besar dari pada 0
          .filter((cartsemi) => cartsemi.qty > 0)
      )

    case CLEAR_ITEMS:
      return []

    case DELELTE_VARIANT_OPTION:
      console.log('action.id')
      console.log(action.id)
      return state.filter((data) => data.idVariantOption !== action.id)

    case SET_ITEMS:
      return action.items

    default:
      return state
  }
}
