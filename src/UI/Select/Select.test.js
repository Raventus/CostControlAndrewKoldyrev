import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Select from './Select'
import '@testing-library/jest-dom'

describe('Select Test', () => {
  test('render Select component', () => {
    const selectProps = {
      onChange: () => {},
      label: 'Категория',
      value: '1',
      options: ['1', '2']
    }

    render(<Select
        options={selectProps.options}
        value={selectProps.value}
        label={selectProps.label}
        onChange={selectProps.onChange}/>)

    screen.debug()
  })
  test('Select component contains element with label', () => {
    const selectProps = {
      onChange: () => {},
      label: 'Категория',
      value: '1',
      options: ['1', '2']
    }

    render(<Select
          options={selectProps.options}
          value={selectProps.value}
          label={selectProps.label}
          onChange={selectProps.onChange}/>)

    expect(screen.getByText('Категория')).toBeInTheDocument()
  })
  test('Select component selected correct option', () => {
    const selectProps = {
      onChange: () => {},
      label: 'Категория',
      value: '1',
      options: ['1', '2']
    }

    render(<Select
            options={selectProps.options}
            value={selectProps.value}
            label={selectProps.label}
            onChange={selectProps.onChange}/>)

    fireEvent.click(screen.getByTestId('select'), { target: { value: 2 } })
    const options = screen.getAllByTestId('option')

    expect(options[0].selected).toBeFalsy()
    expect(options[1].selected).toBeTruthy()
  })
})
