// (1) import module dari `redux`
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'

import authReducer from '../features/Auth/reducer'
import categoryReducer from '../features/Category/reducer'
import variantReducer from '../features/Variant/reducer'
import productReducer from '../features/Product/reducer'
import userReducer from '../features/User/reducer'
import discountReducer from '../features/Discount/reducer'
import cartReducer from '../features/Cart/reducer'
import modalReducer from '../features/Modal/reducer'
import orderReducer from '../features/Order/reducer'
import historyReducer from '../features/History/reducer'
import dashboardReducer from '../features/Dashboard/reducer'
import statisticReducer from '../features/Statistic/reducer'

// (2) import redux-thunk middleware
import thunk from 'redux-thunk'

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  variant: variantReducer,
  product: productReducer,
  user: userReducer,
  discount: discountReducer,
  cart: cartReducer,
  modal: modalReducer,
  order: orderReducer,
  history: historyReducer,
  dashboard: dashboardReducer,
  statistic: statisticReducer,
})

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk)),
)

// (6) export store
export default store
