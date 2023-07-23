
import { type AddCostItemAction, type DeleteCostItemAction } from '../../actions/costItemActions'
import { COSTITEM_ADD, COSTITEM_DELETE } from '../../actions/actionTypes'
import { type CostItemType } from '../../../Infrastructure/Types/CostItemType'
import { CostItems } from '../../state/state'
import moment from 'moment'

const initialState: CostItemType[] = CostItems

type costItemAction = AddCostItemAction | DeleteCostItemAction

export default function costItemReducer (state: CostItemType[] = initialState, action: costItemAction): CostItemType[] {
  switch (action.type) {
    case COSTITEM_ADD: {
      const newState: CostItemType[] = state.concat()
      const newCostItem = (action as AddCostItemAction).costItem
      newCostItem.id = Math.max(...newState.map(o => o.id)) + 1
      newCostItem.date = moment().format('YYYY-MM-DD')
      newState.push(newCostItem)
      return newState
    }
    case COSTITEM_DELETE: {
      const newState: CostItemType[] = state.concat()
      const deletingItem = newState.findIndex(x => x.id === (action as DeleteCostItemAction).id)
      newState.splice(deletingItem, 1)
      return newState
    }
    default:
      return state
  }
}
