import { combineReducers } from 'redux'
import categoryReducer from './Category/categoryReducer'
import costItemReducer from './CostItems/costItemReducer'
import storeReducer from './Store/storeReducer'
import uiShowReducer, { type uiShowFormType } from './Ui/uiReducer'
import { type CostItemType } from '../../CostList/Types/CostItemType'
import DateTimeReducer from './DateTime/DateTimeReducer'
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
