import { type CostItemType } from '../../CostList/Types/CostItemType'
import { STORE_GET_STORE, STORE_SAVE_STORE } from '../actions/actionTypes'
import { type StoreAction } from '../actions/storeActions'

const KEY = 'Example_thunk'

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

export default function storeReducer (state: CostItemType[] = initialState, action: StoreAction): CostItemType[] {
  switch (action.type) {
    case STORE_SAVE_STORE: {
      try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(KEY, serializedState)
      } catch (e) {
        console.log(e)
      }
      return state
    }
    case STORE_GET_STORE: {
      try {
        const serializedState: string | null = localStorage.getItem(KEY)
        if (serializedState == null) {
          return []
        }
        return JSON.parse(serializedState)
      } catch (e) {
        console.log(e)
        return []
      }
    }
    default:
      return state
  }
}
