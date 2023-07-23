import React from 'react'
import { render, screen } from '@testing-library/react'
import { AnalyticsMonthRow } from './AnalyticsMonthRow'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'

describe('AnalyticsMonthRow Test', () => {
  test('AnalyticsMonthRow  is in the document', () => {
    // Arrange
    // Act
    render(<Provider store={store}><AnalyticsMonthRow/></Provider>)
    // Asserts
    expect(screen.getByText('Месяц:')).toBeInTheDocument()
  })
})
