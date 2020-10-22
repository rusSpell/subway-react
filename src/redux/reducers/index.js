import { combineReducers } from 'redux'

import filters from './filters.js'
import products from './products.js'
import cart from './cart.js'

const rootReducer = combineReducers({
  filters,
  products,
  cart
});

export default rootReducer;