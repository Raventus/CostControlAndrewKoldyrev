import costItemReducer from './costItemReducer'
import { COSTITEM_ADD, COSTITEM_DELETE } from '../../actions/actionTypes'
import { type AddCostItemAction, type DeleteCostItemAction } from '../../actions/costItemActions'
import { type CostItemType } from '../../../CostList/Types/CostItemType'

describe('categoryReducer Test', () => {
  test('Send CATEGORIES_ADD return state with new Item', () => {
    // Arrange
    const addCostItem: AddCostItemAction = {
      type: COSTITEM_ADD,
      costItem: {
        name: 'Яблоко',
        cost: 100,
        category: 'Фрукты',
        store: 'Пятёрочка',
        date: '2023-07',
        id: 1
      }
    }
    const initialState: CostItemType[] = [
      {
        name: 'Ванна',
        cost: 100000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 2
      },
      {
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 3
      }
    ]

    // Act
    const result = costItemReducer(initialState, addCostItem)

    // Assert
    expect(result.some(x => x.name === 'Яблоко')).toBeTruthy()
  })
  test('Send CATEGORIES_DELETED return state without deleted Item', () => {
    // Arrange
    const initialState: CostItemType[] = [
      {
        name: 'Яблоко',
        cost: 100,
        category: 'Фрукты',
        store: 'Пятёрочка',
        date: '2023-07',
        id: 1
      },
      {
        name: 'Ванна',
        cost: 100000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 2
      },
      {
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 3
      }
    ]

    const deleteCostItem: DeleteCostItemAction = {
      type: COSTITEM_DELETE,
      id: 1
    }

    // Act
    const result = costItemReducer(initialState, deleteCostItem)
    // Assert
    expect(result.some(x => x.name === 'Ванна')).toBeFalsy()
  })
  test('Send default return state without changes', () => {
    // Arrange
    const initialState: CostItemType[] = [
      {
        name: 'Яблоко',
        cost: 100,
        category: 'Фрукты',
        store: 'Пятёрочка',
        date: '2023-07',
        id: 1
      },
      {
        name: 'Ванна',
        cost: 100000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 2
      },
      {
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-07',
        id: 3
      }
    ]

    const deleteCostItem: DeleteCostItemAction = {
      type: 'NOT_IN_REDUCER_ACTION',
      id: 1
    }

    // Act
    const result = costItemReducer(initialState, deleteCostItem)
    // Assert
    expect(result.some(x => x.name === 'Ванна')).toBeTruthy()
  })
})
