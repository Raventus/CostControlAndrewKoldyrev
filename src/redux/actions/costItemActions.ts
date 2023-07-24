import { COSTITEM_ADD, COSTITEM_DELETE } from './actionTypes'
import { type CostItemType } from '../../Infrastructure/Types/CostItemType'

export interface AddCostItemAction {
  type: string
  costItem: CostItemType
}

export interface DeleteCostItemAction {
  type: string
  id: number
}
export function addCostItemActionCreator (costItem: CostItemType): AddCostItemAction {
  return {
    type: COSTITEM_ADD,
    costItem
  }
}

export function deleteCostItemActionCreator (id: number): DeleteCostItemAction {
  return {
    type: COSTITEM_DELETE,
    id
  }
}
