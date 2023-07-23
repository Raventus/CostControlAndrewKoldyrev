import { DATETIME_CHANGE_MONTH_TO_CALCULATE } from './actionTypes'

export function changeMonthToCalculate (newMonthToCalculate: string): AddMonthToCalculateItemAction {
  return {
    type: DATETIME_CHANGE_MONTH_TO_CALCULATE,
    newMonthToCalculate
  }
}

export interface AddMonthToCalculateItemAction {
  type: string
  newMonthToCalculate: string
}
