import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Auth from './Auth'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'

describe('Auth Test', () => {
  test('render Auth component', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Auth />
      </Router>)
    screen.debug()
  })
  test('Auth component render enter valid mail- login button is NOT disabled', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Auth />
      </Router>)
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'raven@mail.ru' } })

    expect(screen.getByLabelText('Email')).toBeEnabled()
  })
  test('Auth component render - login button is disabled', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Auth />
      </Router>)

    expect(screen.getByText('Войти')).toBeDisabled()
  })
})
test('Auth component click login button', () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <Auth />
    </Router>)
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'raven@mail.ru' } })
  fireEvent.click(screen.getByLabelText('Email'))
  expect(screen.getByLabelText('Email')).toBeEnabled()
})
