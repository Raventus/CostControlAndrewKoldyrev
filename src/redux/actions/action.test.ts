import { addCategoryActionCreator, deleteCategoryActionCreator } from './catrgoryActions'
import { addCostItemActionCreator, deleteCostItemActionCreator } from './costItemActions'
import { CATEGORIES_ADD, CATEGORIES_DELETE, COSTITEM_ADD, COSTITEM_DELETE, COSTITEM_TOOGLE_SHOW_ADD_FORM, DATETIME_CHANGE_MONTH_TO_CALCULATE } from './actionTypes'
import { type CostItemType } from '../../Infrastructure/Types/CostItemType'
import { toogleAddCostItemFormActionCreator } from './uiActions'
import { changeMonthToCalculate } from './DateTimeActions'

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
      store: 'Пятёрочка',
      date: '2023-08',
      id: 1
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
describe('DateTimeActions Test', () => {
  test('DateTimeActions return valid object', () => {
    // Arrange
    const newMonth = '2023-08'
    // Act
    const result = changeMonthToCalculate(newMonth)

    // Assert
    expect(result.type).toEqual(DATETIME_CHANGE_MONTH_TO_CALCULATE)
    expect(result.newMonthToCalculate).toEqual(newMonth)
  })
})
