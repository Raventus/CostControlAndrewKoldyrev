import React from 'react'
import { render, screen } from '@testing-library/react'
import { CostList } from './CostList'
import '@testing-library/jest-dom'

describe('CostList Test', () => {
  test('render CostList component', () => {
    render(<CostList/>)
    screen.debug()
  })
  test('CostList component contains', () => {
    render(<CostList/>)
    expect(screen.getByText('Добавить')).toBeInTheDocument()
  })
})
