import { type AnyAction } from 'redux'
import { COSTITEM_TOOGLE_SHOW_ADD_FORM } from './actionTypes'

export function toogleAddCostItemFormActionCreator (): AnyAction {
  return {
    type: COSTITEM_TOOGLE_SHOW_ADD_FORM
  }
}
