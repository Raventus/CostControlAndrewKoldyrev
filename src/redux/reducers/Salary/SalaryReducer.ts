import { Salary } from '../../state/state'
import { type SalaryByMonth } from '../../../CostList/Types/SalaryByMonth'
import { type AnyAction } from 'redux'

const initialState: SalaryByMonth[] = Salary

export default function salaryReducer (state: SalaryByMonth[] = initialState, action: AnyAction): SalaryByMonth[] {
  switch (action.type) {
    default:
      return state
  }
}
