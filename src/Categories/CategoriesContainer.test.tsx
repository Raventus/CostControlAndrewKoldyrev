import React from 'react'
import { render, screen } from '@testing-library/react'
import { CategoriesContainer } from './CategoriesContainer'
import '@testing-library/jest-dom'
import { type CostItemType } from '../Infrastructure/Types/CostItemType'
import { type CategoryType } from '../Infrastructure/Types/CategoryType'
import { type AddCategoryAction } from '../redux/actions/catrgoryActions'
import { CATEGORIES_ADD } from '../redux/actions/actionTypes'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

describe('CategoriesContainer Test', () => {
  test('render CostList component', () => {
    const itemsArray: CostItemType[] = [
      {
        name: 'Яблоко',
        cost: 100,
        category: 'Фрукты',
        store: 'Пятёрочка',
        date: '2023-08',
        id: 1
      },
      {
        name: 'Ванна',
        cost: 100000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-08',
        id: 2
      },
      {
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-08',
        id: 3
      }
    ]

    const categories: CategoryType[] = [
      {
        name: 'Фрукты',
        id: 1
      },
      {
        name: 'Сантехника',
        id: 2
      }
    ]

    const addCategory = (category: string): AddCategoryAction => {
      return {
        type: CATEGORIES_ADD,
        category
      }
    }

    render(<Provider store={store}><CategoriesContainer items = {itemsArray} categories = {categories} addCategory={addCategory}/>
    </Provider>)
    screen.debug()
  })
  test('CategoriesContainer component contains', () => {
    const itemsArray: CostItemType[] = [
      {
        name: 'Яблоко',
        cost: 100,
        category: 'Фрукты',
        store: 'Пятёрочка',
        date: '2023-08',
        id: 1
      },
      {
        name: 'Ванна',
        cost: 100000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-08',
        id: 2
      },
      {
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей',
        date: '2023-08',
        id: 3
      }
    ]

    const categories: CategoryType[] = [
      {
        name: 'Фрукты',
        id: 1
      },
      {
        name: 'Сантехника',
        id: 2
      }
    ]
    const addCategory = (category: string): AddCategoryAction => {
      return {
        type: CATEGORIES_ADD,
        category
      }
    }

    render(<Provider store={store}><CategoriesContainer items = {itemsArray} categories = {categories} addCategory = {addCategory}/></Provider>)

    expect(screen.getByText('Фрукты : 100')).toBeInTheDocument()
  })
})
