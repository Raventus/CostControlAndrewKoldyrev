import categoryReducer from './categoryReducer'
import { CATEGORIES_ADD, CATEGORIES_DELETE } from '../actions/actionTypes'
import { type AddCategoryAction, type DeleteCategoryAction } from '../actions/catrgoryActions'

describe('categoryReducer Test', () => {
  test('Send CATEGORIES_ADD return state with new Item', () => {
    // Arrange
    const addCategory: AddCategoryAction = {
      type: CATEGORIES_ADD,
      category: 'categoryToAdd'
    }
    const initialState: string[] = ['oldCategoty']
    // Act
    const result = categoryReducer(initialState, addCategory)

    // Assert
    expect(result.some(x => x === 'categoryToAdd')).toBeTruthy()
  })
  test('Send CATEGORIES_DELETED return state without deleted Item', () => {
    // Arrange
    const initialState: string[] = ['oldCategoty', 'deletedItem', 'notDeletedItem']
    const deleteCategory: DeleteCategoryAction = {
      type: CATEGORIES_DELETE,
      id: 1
    }

    // Act
    const result = categoryReducer(initialState, deleteCategory)

    // Assert
    expect(result.some(x => x === 'deletedItem')).toBeFalsy()
  })
  test('Send default return state without changes', () => {
    // Arrange
    const initialState: string[] = ['oldCategoty', 'deletedItem', 'notDeletedItem']
    const deleteCategory: DeleteCategoryAction = {
      type: 'ANOTHER_TYPE',
      id: 1
    }

    // Act
    const result = categoryReducer(initialState, deleteCategory)

    // Assert
    expect(result.some(x => x === 'deletedItem')).toBeTruthy()
  })
})
