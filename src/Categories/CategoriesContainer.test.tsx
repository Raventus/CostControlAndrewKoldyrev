import React from 'react'
import { render, screen } from '@testing-library/react'
import CategoriesContainer from './CategoriesContainer'
import '@testing-library/jest-dom'
import { type CostItemType } from '../CostList/Types/CostItemType'

describe('CategoriesContainer Test', () => {
  test('render CostList component', () => {
    const itemsArray: CostItemType[] = [
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
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей'
      }
    ]

    const categories: string[] = [
      'Фрукты',
      'Сантехника'
    ]

    render(<CategoriesContainer items = {itemsArray} categories = {categories}/>)
    screen.debug()
  })
  test('CategoriesContainer component contains', () => {
    const itemsArray: CostItemType[] = [
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
        name: 'Унитаз',
        cost: 1000,
        category: 'Сантехника',
        store: 'Водолей'
      }
    ]

    const categories: string[] = [
      'Фрукты',
      'Сантехника'
    ]

    render(<CategoriesContainer items = {itemsArray} categories = {categories}/>)

    expect(screen.getByText('Фрукты : 100')).toBeInTheDocument()
  })
})
