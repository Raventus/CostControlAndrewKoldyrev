
import { type AddCostItemAction, type DeleteCostItemAction } from '../actions/costItemActions'
import { COSTITEM_ADD, COSTITEM_DELETE } from '../actions/actionTypes'
import { type CostItemType } from '../../CostList/Types/CostItemType'
import { CostItems } from '../state/state'

const initialState: CostItemType[] = CostItems

type costItemAction = AddCostItemAction | DeleteCostItemAction

export default function costItemReducer (state: CostItemType[] = initialState, action: costItemAction): CostItemType[] {
  switch (action.type) {
    case COSTITEM_ADD: {
      const newState: CostItemType[] = state.concat()
      newState.push((action as AddCostItemAction).costItem)
      return newState
    }
    case COSTITEM_DELETE: {
      const newState: CostItemType[] = state.concat()
      newState.splice((action as DeleteCostItemAction).id, 1)
      return newState
    }
    default:
      return state
  }
}
