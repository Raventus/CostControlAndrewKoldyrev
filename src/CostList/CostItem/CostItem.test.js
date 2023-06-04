import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CostItem } from './CostItem'
import '@testing-library/jest-dom'

describe('CostItem Test', () => {
  test('render CostItem component', () => {
    const newItem = {
      name: 'BrandNewItem'
    }
    render(<CostItem item = {newItem}/>)
    screen.debug()
  })
  test('CostItem component contains', () => {
    const newItem = {
      name: 'BrandNewItem',
      category: 'Фрукты'
    }
    render(<CostItem item = {newItem}/>)
    expect(screen.getByText('Стоимость :')).toBeInTheDocument()
  })
  test('CostItem component press Delete button', () => {
    const onDelete = jest.fn()
    const newItem = {
      name: 'BrandNewItem',
      category: 'Фрукты'
    }

    render(<CostItem item = {newItem} onDeleted={onDelete}/>)

    fireEvent.click(screen.getByText('Удалить'))

    expect(onDelete).toHaveBeenCalled()
  })
})
