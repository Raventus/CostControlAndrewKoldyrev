import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CategoriesAdd } from './CategoriesAdd'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'

describe('CategoriesAdd Test', () => {
  test('render CategoriesAdd component', () => {
    // Act
    render(<Provider store={store}>
        <CategoriesAdd />
    </Provider>)

    // Arrange
    expect(screen.getByText('Новая категория:')).toBeInTheDocument()
  })
  test('CategoriesAdd - add new category', () => {
    render(<Provider store={store}>
        <CategoriesAdd />
    </Provider>)
    fireEvent.change(screen.getByLabelText('Новая категория:'), { target: { value: 'Фрукты2' } })
    fireEvent.click(screen.getByText('Добавить'))

    expect(store.getState().categories.some(x => x.name === 'Фрукты2')).toBeTruthy()
  })
})
