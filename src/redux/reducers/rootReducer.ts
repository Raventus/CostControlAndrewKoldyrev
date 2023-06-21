import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import costItemReducer from './costItemReducer'

export default combineReducers({
  categoryReducer, costItemReducer
})
