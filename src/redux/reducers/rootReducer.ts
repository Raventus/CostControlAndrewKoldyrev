import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import costItemReducer from './costItemReducer'
import storeReducer from './storeReducer'

export default combineReducers({
  categoryReducer, costItemReducer, storeReducer
})
