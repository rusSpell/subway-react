import { combineReducers } from 'redux'

import filtersReducer from './filters.js'
import productsReducer from './products.js'

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer
});

export default rootReducer;