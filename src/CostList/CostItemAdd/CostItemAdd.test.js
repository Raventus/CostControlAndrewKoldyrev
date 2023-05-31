import React from 'react'
import { render, screen } from '@testing-library/react'
import { CostItemAdd } from './CostItemAdd'
import '@testing-library/jest-dom'

describe('CostItemAdd Test', () => {
  test('render CostList component', () => {
    render(<CostItemAdd categories={['1', '2']}/>)
    screen.debug()
  })
  test('CostList component contains', () => {
    render(<CostItemAdd categories={['1', '2']}/>)
    expect(screen.getByText('Цена')).toBeInTheDocument()
  })
})
