import { combineReducers } from 'redux'
import categoryReducer from './Category/categoryReducer'
import costItemReducer from './CostItems/costItemReducer'
import storeReducer from './Store/storeReducer'
import uiShowReducer, { type uiShowFormType } from './Ui/uiReducer'
import { type CostItemType } from '../../Infrastructure/Types/CostItemType'
import DateTimeReducer from './DateTime/DateTimeReducer'
import { type SalaryByMonth } from '../../Infrastructure/Types/SalaryByMonth'
import SalaryReducer from './Salary/SalaryReducer'
import { type CategoryType } from '../../Infrastructure/Types/CategoryType'

export interface storeValuesType {
  categories: CategoryType[]
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
