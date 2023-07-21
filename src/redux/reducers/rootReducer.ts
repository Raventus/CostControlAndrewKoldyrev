import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import costItemReducer from './costItemReducer'
import storeReducer from './storeReducer'
import uiShowReducer, { type uiShowFormType } from './uiReducer'
import { type CostItemType } from '../../CostList/Types/CostItemType'

export interface storeValuesType {
  categories: string[]
  costItems: CostItemType[]
  uiShow: uiShowFormType
}

export default combineReducers({
  categories: categoryReducer,
  costItems: costItemReducer,
  uiShow: uiShowReducer,
  store: storeReducer
})
