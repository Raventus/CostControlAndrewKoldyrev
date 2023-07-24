import React from 'react'
import { render, screen } from '@testing-library/react'
import Analytics from './Analytics'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store/store'

describe('Analytics Test', () => {
  global.ResizeObserver = require('resize-observer-polyfill')
  test('Analytics  is in the document', () => {
    // Arrange
    // Act
    render(<Provider store={store}><Analytics/></Provider>)
    // Asserts
    expect(screen.getByText('Доходы/расходы:')).toBeInTheDocument()
  })
})
