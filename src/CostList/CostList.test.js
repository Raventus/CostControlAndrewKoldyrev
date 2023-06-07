import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CostList } from './CostList'
import '@testing-library/jest-dom'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ rates: { CAD: 1.42 } })
  })
)

describe('CostList Test', () => {
  test('render CostList component', () => {
    const costItemListProps = {
      items: [
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
        }
      ],
      categories: ['Сантехника', 'Фрукты']
    }
    render(<CostList {...costItemListProps}/>)
    screen.debug()
  })
  test('CostList component contains', () => {
    render(<CostList/>)
    expect(screen.getByText('Добавить')).toBeInTheDocument()
  })
  test('CostList push add button - form is shown', () => {
    const costItemListProps = {
      items: [
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
        }
      ],
      categories: ['Сантехника', 'Фрукты']
    }
    render(<CostList {...costItemListProps}/>)
    fireEvent.click(screen.getByText('Добавить'))
    expect(screen.getByText('Цена')).toBeInTheDocument()
  })
})
