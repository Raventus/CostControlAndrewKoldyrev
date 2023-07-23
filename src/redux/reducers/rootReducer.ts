import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import costItemReducer from './CostItems/costItemReducer'
import storeReducer from './Store/storeReducer'
import uiShowReducer, { type uiShowFormType } from './uiReducer'
import { type CostItemType } from '../../CostList/Types/CostItemType'
import DateTimeReducer from './DateTimeReducer'
import { type SalaryByMonth } from '../../CostList/Types/SalaryByMonth'
import SalaryReducer from './Salary/SalaryReducer'

export interface storeValuesType {
  categories: string[]
  costItems: CostItemType[]
  uiShow: uiShowFormType
  monthToCalculate: string
  salary: SalaryByMonth[]
}

export default combineReducers({
  categories: categoryReducer,
  costItems: costItemReducer,
  uiShow: uiShowReducer,
  monthToCalculate: DateTimeReducer,
  salary: SalaryReducer,
  store: storeReducer
})
