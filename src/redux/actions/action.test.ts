import { addCategoryActionCreator, deleteCategoryActionCreator } from './catrgoryActions'
import { addCostItemActionCreator, deleteCostItemActionCreator } from './costItemActions'
import { CATEGORIES_ADD, CATEGORIES_DELETE, COSTITEM_ADD, COSTITEM_DELETE, COSTITEM_TOOGLE_SHOW_ADD_FORM } from './actionTypes'
import { type CostItemType } from '../../CostList/Types/CostItemType'
import { toogleAddCostItemFormActionCreator } from './uiActions'

describe('CategoryAction Test', () => {
  test('addCategoryActionCreator return valid object', () => {
    // Arrange
    const addCategory: string = 'categoryToAdd'

    // Act
    const result = addCategoryActionCreator(addCategory)

    // Assert
    expect(result.type).toEqual(CATEGORIES_ADD)
    expect(result.category).toEqual(addCategory)
  })
  test('deleteCategoryActionCreator return valid object', () => {
    // Arrange
    const deleteId: number = 1

    // Act
    const result = deleteCategoryActionCreator(deleteId)

    // Assert
    expect(result.type).toEqual(CATEGORIES_DELETE)
    expect(result.id).toEqual(deleteId)
  })
})

describe('CostItemAction Test', () => {
  test('addCostItemActionCreator return valid object', () => {
    // Arrange
    const costItem: CostItemType = {
      name: 'Яблоко',
      cost: 100,
      category: 'Фрукты',
      store: 'Пятёрочка'
    }

    // Act
    const result = addCostItemActionCreator(costItem)

    // Assert
    expect(result.type).toEqual(COSTITEM_ADD)
    expect(result.costItem).toEqual(costItem)
  })
  test('deleteCostItemActionCreator return valid object', () => {
    // Arrange
    const deleteId: number = 1

    // Act
    const result = deleteCostItemActionCreator(deleteId)

    // Assert
    expect(result.type).toEqual(COSTITEM_DELETE)
    expect(result.id).toEqual(deleteId)
  })
})
describe('UiActions Test', () => {
  test('toogleAddCostItemForm return valid object', () => {
    // Arrange
    // Act
    const result = toogleAddCostItemFormActionCreator()

    // Assert
    expect(result.type).toEqual(COSTITEM_TOOGLE_SHOW_ADD_FORM)
  })
})
