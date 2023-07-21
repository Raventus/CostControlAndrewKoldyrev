import { type AnyAction } from 'redux'
import { COSTITEM_TOOGLE_SHOW_ADD_FORM } from '../actions/actionTypes'
import uiShowReducer, { type uiShowFormType } from './uiReducer'

describe('uiShowReducer Test', () => {
  test('Send CATEGORIES_ADD return state with change uiShowCostItemForm item', () => {
    // Arrange
    const uiShowFormAction: AnyAction = {
      type: COSTITEM_TOOGLE_SHOW_ADD_FORM
    }
    const initialState: uiShowFormType = {
      showAddCostItemForm: false
    }
    // Act
    const result = uiShowReducer(initialState, uiShowFormAction)

    // Assert
    expect(result.showAddCostItemForm).toBe(true)
  })
})
