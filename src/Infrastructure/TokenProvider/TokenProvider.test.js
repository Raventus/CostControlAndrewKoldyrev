import React from 'react'
import { render, screen } from '@testing-library/react'
import { TokenProvider } from './TokenProvider'
import '@testing-library/jest-dom'

describe('TokenProvider Test', () => {
  test('render TokenProvider component', () => {
    render(<TokenProvider/>)
    screen.debug()
  })
  test('render TokenProvider component when token is exist', () => {
    localStorage.setItem('token', 'value')
    render(<TokenProvider/>)
    screen.debug()
  })
})
