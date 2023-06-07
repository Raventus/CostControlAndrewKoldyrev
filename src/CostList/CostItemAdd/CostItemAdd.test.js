import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CostItemAdd } from './CostItemAdd'
import '@testing-library/jest-dom'

describe('CostItemAdd Test', () => {
  test('render CostList component', () => {
    render(<CostItemAdd categories={['1', '2']}/>)
    screen.debug()
  })
  test('CostItemAdd component contains', () => {
    render(<CostItemAdd categories={['1', '2']}/>)
    expect(screen.getByText('Цена')).toBeInTheDocument()
  })
  test('CostItemAdd component press Add', () => {
    const onAdd = jest.fn()

    render(<CostItemAdd categories={['1', '2']} onAdd={onAdd}/>)

    fireEvent.click(screen.getByText('Добавить'))

    expect(onAdd).toHaveBeenCalled()
  })
})
