import React from 'react'
import { render, screen } from '@testing-library/react'
import { CostItem } from './CostItem'
import '@testing-library/jest-dom'

describe('CostItemAdd Test', () => {
  test('render CostList component', () => {
    const newItem = {
      name: 'BrandNewItem'
    }
    render(<CostItem item = {newItem}/>)
    screen.debug()
  })
  test('CostList component contains', () => {
    const newItem = {
      name: 'BrandNewItem',
      category: 'Фрукты'
    }
    render(<CostItem item = {newItem}/>)
    expect(screen.getByText('Стоимость :')).toBeInTheDocument()
  })
})
