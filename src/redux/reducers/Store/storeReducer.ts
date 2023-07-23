import { type CostItemType } from '../../../CostList/Types/CostItemType'
import { STORE_GET_STORE, STORE_SAVE_STORE } from '../../actions/actionTypes'
import { type StoreAction } from '../../actions/storeActions'
import { CostItems } from '../../state/state'

const KEY = 'Example_thunk'

const initialState: CostItemType[] = CostItems

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
