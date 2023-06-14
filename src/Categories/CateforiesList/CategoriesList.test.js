import React from 'react'
import { render, screen } from '@testing-library/react'
import CategoriesList from './CategoriesList'
import '@testing-library/jest-dom'

describe('CostItemAdd Test', () => {
  test('render CostList component', () => {
    const categoriesWithPrice = {
      category: '1',
      costs: 1000
    }
    render(<CategoriesList {...categoriesWithPrice}/>)
    screen.debug()
  })
  test('CostItemAdd component contains', () => {
    const categoriesWithPrice = {
      category: '1',
      costs: 1000
    }
    render(<CategoriesList {...categoriesWithPrice}/>)

    expect(screen.getByText(`${categoriesWithPrice.category} : ${categoriesWithPrice.costs}`)).toBeInTheDocument()
  })
})
