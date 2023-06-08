import React from 'react'
import Input from './Input'

export default {
  title: 'UI/UI/Input',
  component: Input
}

export const Default = (): JSX.Element => {
  const inputProps = {
    label: 'Имя',
    value: 'test',
    errorMessage: 'Введите корректый магазин',
    valid: false,
    touched: false,
    validation: {
      required: false
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    }
  }

  return <Input
  type = ""
  shouldValidate={false}
  valid={inputProps.valid}
  touched={inputProps.touched}
  errorMessage={inputProps.errorMessage}
  value={inputProps.value}
  label={inputProps.label}
  onChange={ inputProps.onChange }/>
}

export const RadioValues = (): JSX.Element => {
  const inputProps = {
    label: 'Имя',
    value: 'test',
    errorMessage: 'Введите корректый магазин',
    valid: false,
    touched: false,
    validation: {
      required: false
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    }
  }

  return <Input
  type="radio"
  shouldValidate={false}
  valid={inputProps.valid}
  touched={inputProps.touched}
  errorMessage={inputProps.errorMessage}
  value={inputProps.value}
  label={inputProps.label}
  onChange={ inputProps.onChange }/>
}
