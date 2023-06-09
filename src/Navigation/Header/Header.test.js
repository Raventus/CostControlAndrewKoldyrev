import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import '@testing-library/jest-dom'
import { TokenProvider } from '../../Infrastructure/TokenProvider/TokenProvider'

describe('Header Test', () => {
  test('render Header component', () => {
    render(
      <Header />)
    screen.debug()
  })
  test('Header buttons is in the document if token is exist', () => {
    localStorage.setItem('token', 'value')
    render(
      <TokenProvider>
        <Header />
      </TokenProvider>)
    expect(screen.getByText('Выйти')).toBeInTheDocument()
  })
  test('Header buttons is NOT in the document if token is NOT  exist', () => {
    localStorage.removeItem('token')
    render(
      <TokenProvider>
        <Header />
      </TokenProvider>)
    const submitButton = screen.queryByText('Выйти')
    expect(submitButton).toBeNull()
  })
})
