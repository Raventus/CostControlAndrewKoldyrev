
import { type AddCostItemAction, type DeleteCostItemAction } from '../actions/costItemActions'
import { COSTITEM_ADD, COSTITEM_DELETE } from '../actions/actionTypes'
import { type CostItemType } from '../../CostList/Types/CostItemType'

const initialState: CostItemType[] = [
  {
    name: 'Яблоко',
    cost: 100,
    category: 'Фрукты',
    store: 'Пятёрочка'
  },
  {
    name: 'Ванна',
    cost: 100000,
    category: 'Сантехника',
    store: 'Водолей'
  },
  {
    name: 'Монитор',
    cost: 10000,
    category: 'Техника',
    store: 'DNS'
  },
  {
    name: 'Гарри поттер и Узник Азкабана',
    cost: 1000,
    category: 'Книга',
    store: 'Книжный мир'
  }
]

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
