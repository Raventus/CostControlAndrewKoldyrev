import React from 'react'
import Button from './Button'

export default {
  title: 'UI/UI/Button',
  component: Button
}

export const Default = (): JSX.Element => {
  const buttonProps = {
    onClick: () => {},
    type: 'success',
    disabled: false,
    children: 'button'
  }

  return <Button
  onClick={buttonProps.onClick}
  type={buttonProps.type}
  disabled={buttonProps.disabled}
  >
      {buttonProps.children}
  </Button>
}

export const DisabledButton = (): JSX.Element => {
  const buttonProps = {
    onClick: () => {},
    type: 'success',
    disabled: true,
    children: 'button'
  }

  return <Button
  onClick={buttonProps.onClick}
  type={buttonProps.type}
  disabled={buttonProps.disabled}
  >
      {buttonProps.children}
  </Button>
}

export const ErrorButton = (): JSX.Element => {
  const buttonProps = {
    onClick: () => {},
    type: 'error',
    disabled: false,
    children: 'button'
  }

  return <Button
    onClick={buttonProps.onClick}
    type={buttonProps.type}
    disabled={buttonProps.disabled}
    >
        {buttonProps.children}
    </Button>
}
