import DateTimeReducer from './DateTimeReducer'
import { DATETIME_CHANGE_MONTH_TO_CALCULATE } from '../../actions/actionTypes'
import { type AddMonthToCalculateItemAction } from '../../actions/dateTimeActions'

describe('categoryReducer Test', () => {
  test('Send DATETIME_CHANGE_MONTH_TO_CALCULATE return state with new month', () => {
    // Arrange
    const newMonthToCalculate = '2023-09'
    const AddMonthToCalculateItemAction: AddMonthToCalculateItemAction = {
      type: DATETIME_CHANGE_MONTH_TO_CALCULATE,
      newMonthToCalculate
    }
    const initialState: string = '2023-08'
    // Act
    const result = DateTimeReducer(initialState, AddMonthToCalculateItemAction)

    // Assert
    expect(result).toBe(newMonthToCalculate)
  })
})
