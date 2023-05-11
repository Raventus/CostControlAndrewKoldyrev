import React from 'react'
import { render, screen } from '@testing-library/react'
import { CostItemAdd } from './CostItemAdd'
import '@testing-library/jest-dom'

describe('CostItemAdd Test', () => {
  test('render CostList component', () => {
    const newItem = {
      name: 'BrandNewItem'
    }
    render(<CostItemAdd costItem = {newItem}/>)
    screen.debug()
  })
  test('CostList component contains', () => {
    const newItem = {
      name: 'BrandNewItem'
    }
    render(<CostItemAdd costItem = {newItem}/>)
    expect(screen.getByText('Цена:')).toBeInTheDocument()
  })
})
