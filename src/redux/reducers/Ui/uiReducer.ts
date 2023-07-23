import { type AnyAction } from 'redux'
import { COSTITEM_TOOGLE_SHOW_ADD_FORM } from '../../actions/actionTypes'

export interface uiShowFormType {
  showAddCostItemForm: boolean
}

const initialState: uiShowFormType = {
  showAddCostItemForm: false
}

export default function uiShowReducer (state: uiShowFormType = initialState, action: AnyAction): uiShowFormType {
  switch (action.type) {
    case COSTITEM_TOOGLE_SHOW_ADD_FORM: {
      const newState = {
        ...state,
        showAddCostItemForm: !state.showAddCostItemForm
      }
      return {
        ...newState
      }
    }
    default:
      return state
  }
}
