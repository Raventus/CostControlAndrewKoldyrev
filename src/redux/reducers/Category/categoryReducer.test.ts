import categoryReducer from './categoryReducer'
import { CATEGORIES_ADD, CATEGORIES_DELETE } from '../../actions/actionTypes'
import { type AddCategoryAction, type DeleteCategoryAction } from '../../actions/catrgoryActions'
import { type CategoryType } from '../../../Infrastructure/Types/CategoryType'

describe('categoryReducer Test', () => {
  test('Send CATEGORIES_ADD return state with new Item', () => {
    // Arrange
    const addCategory: AddCategoryAction = {
      type: CATEGORIES_ADD,
      category: 'categoryToAdd'
    }
    const initialState: CategoryType[] = [
      {
        name: 'oldCategoty',
        id: 1
      }]
    // Act
    const result = categoryReducer(initialState, addCategory)

    // Assert
    expect(result.some(x => x.name === 'categoryToAdd')).toBeTruthy()
  })
  test('Send CATEGORIES_DELETED return state without deleted Item', () => {
    // Arrange
    const initialState: CategoryType[] = [
      {
        name: 'oldCategoty',
        id: 1
      },
      {
        name: 'deletedItem',
        id: 2
      },
      {
        name: 'notDeletedItem',
        id: 3
      }]

    const deleteCategory: DeleteCategoryAction = {
      type: CATEGORIES_DELETE,
      id: 2
    }

    // Act
    const result = categoryReducer(initialState, deleteCategory)

    // Assert
    expect(result.some(x => x.name === 'deletedItem')).toBeFalsy()
  })
  test('Send default return state without changes', () => {
    // Arrange
    const initialState: CategoryType[] = [{
      name: 'oldCategoty',
      id: 1
    },
    {
      name: 'deletedItem',
      id: 2
    },
    {
      name: 'notDeletedItem',
      id: 3
    }]
    const deleteCategory: DeleteCategoryAction = {
      type: 'ANOTHER_TYPE',
      id: 1
    }

    // Act
    const result = categoryReducer(initialState, deleteCategory)

    // Assert
    expect(result.some(x => x.name === 'deletedItem')).toBeTruthy()
  })
})
