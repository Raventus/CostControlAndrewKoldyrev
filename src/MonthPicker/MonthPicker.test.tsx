import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { MonthPicker } from './MonthPicker'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

describe('MonthPicker Test', () => {
  test('MonthPicker  is in the document', () => {
    // Arrange
    // Act
    render(<Provider store={store}><MonthPicker/></Provider>)
    // Asserts
    expect(screen.getByText('Месяц:')).toBeInTheDocument()
  })
  test('MonthPicker change month', () => {
    render(
      <Provider store={store}><MonthPicker /></Provider>)
    fireEvent.change(screen.getByLabelText('Месяц:'), { target: { value: '2023-08' } })
    expect(screen.getByText('Месяц:')).toBeInTheDocument()
  })
})
