import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './Input'
import '@testing-library/jest-dom'

describe('Input Test', () => {
  test('render Input component', () => {
    const inputProps = {
      type: 'text',
      label: 'Имя',
      value: 'test',
      onChange: event => {

      }
    }

    render(<Input
        type={inputProps.type}
        value={inputProps.value}
        label={inputProps.label}
        onChange={ event => {
        } }/>)

    screen.debug()
  })
  test('Input component contains element with label', () => {
    const inputProps = {
      type: 'text',
      label: 'Имя',
      value: 'test',
      onChange: event => {
      }
    }

    render(<Input
        type={inputProps.type}
        value={inputProps.value}
        label={inputProps.label}
        onChange={ event => {
        } }/>)
    expect(screen.getByText('Имя')).toBeInTheDocument()
  })
  test('Input component with no type get text type', () => {
    const inputProps = {
      label: 'Имя',
      value: 'test',
      onChange: event => {
      }
    }

    render(<Input
        value={inputProps.value}
        label={inputProps.label}
        onChange={ event => {
        } }/>)
    expect(screen.queryByDisplayValue('test').type).toBe('text')
  })
})
