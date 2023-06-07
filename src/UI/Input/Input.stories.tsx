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
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    }
  }

  return <Input
  type = ""
  value={inputProps.value}
  label={inputProps.label}
  onChange={ inputProps.onChange }/>
}

export const RadioValues = (): JSX.Element => {
  const inputProps = {
    type: 'radio',
    label: 'Имя',
    value: 'test',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    }
  }

  return <Input
  type={inputProps.type}
  value={inputProps.value}
  label={inputProps.label}
  onChange={ inputProps.onChange }/>
}
