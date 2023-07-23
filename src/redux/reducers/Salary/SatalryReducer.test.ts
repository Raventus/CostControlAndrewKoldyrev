import salaryReducer from './SalaryReducer'
import { type SalaryByMonth } from '../../../CostList/Types/SalaryByMonth'
import { type AnyAction } from 'redux'

describe('salaryReducer Test', () => {
  test('state is not changed with anyAction', () => {
    // Arrange
    const initialState: SalaryByMonth[] = [
      {
        month: '2023-08',
        salary: 20000
      }
    ]
    const salaryAction: AnyAction = {
      type: 'anyType'
    }

    // Act
    const result = salaryReducer(initialState, salaryAction)

    // Assert
    expect(result.some(x => x.month === '2023-08' && x.salary === 20000)).toBe(true)
  })
})
