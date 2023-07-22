import { type AddCategoryAction, type DeleteCategoryAction } from '../actions/catrgoryActions'
import { CATEGORIES_ADD, CATEGORIES_DELETE } from '../actions/actionTypes'
import { Categories } from '../state/state'

const initialState: string[] = Categories

type categoryAction = AddCategoryAction | DeleteCategoryAction

export default function categoryReducer (state: string[] = initialState, action: categoryAction): string[] {
  switch (action.type) {
    case CATEGORIES_ADD: {
      const newState: string[] = state.concat()
      newState.push((action as AddCategoryAction).category)
      return newState
    }
    case CATEGORIES_DELETE: {
      const newState: string[] = state.concat()
      newState.splice((action as DeleteCategoryAction).id, 1)
      return newState
    }
    default:
      return state
  }
}
