
import { DATETIME_CHANGE_MONTH_TO_CALCULATE } from '../../actions/actionTypes'
import { type AddMonthToCalculateItemAction } from '../../actions/DateTimeActions'
import { MonthToCalculate } from '../../state/state'

const initialState: string = MonthToCalculate

export default function DateTimeReducer (state: string = initialState, action: AddMonthToCalculateItemAction): string {
  switch (action.type) {
    case DATETIME_CHANGE_MONTH_TO_CALCULATE: {
      const monthToCalculate: string = action.newMonthToCalculate
      return monthToCalculate
    }
    default:
      return state
  }
}