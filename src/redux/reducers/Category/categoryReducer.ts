import { type AddCategoryAction, type DeleteCategoryAction } from '../../actions/catrgoryActions'
import { CATEGORIES_ADD, CATEGORIES_DELETE } from '../../actions/actionTypes'
import { Categories } from '../../state/state'
import { type CategoryType } from '../../../Infrastructure/Types/CategoryType'

const initialState: CategoryType[] = Categories

type categoryAction = AddCategoryAction | DeleteCategoryAction

export default function categoryReducer (state: CategoryType[] = initialState, action: categoryAction): CategoryType[] {
  switch (action.type) {
    case CATEGORIES_ADD: {
      const newState: CategoryType[] = state.concat()
      const newId = Math.max(...state.map(x => x.id)) + 1
      const newCategory: CategoryType = {
        name: (action as AddCategoryAction).category,
        id: newId
      }
      newState.push(newCategory)
      return newState
    }
    case CATEGORIES_DELETE: {
      const newState: CategoryType[] = state.concat()
      const deletingItem = newState.findIndex(x => x.id === (action as DeleteCategoryAction).id)
      newState.splice(deletingItem, 1)
      return newState
    }
    default:
      return state
  }
}
