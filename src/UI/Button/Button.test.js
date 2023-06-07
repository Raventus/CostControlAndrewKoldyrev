import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'
import '@testing-library/jest-dom'

describe('Button Test', () => {
  test('render Button component', () => {
    const buttonProps = {
      onClick: () => {},
      type: 'success',
      disabled: false,
      children: 'button'
    }

    render(<Button
        type={buttonProps.type}
        disabled={buttonProps.disabled}
        >
            {buttonProps.children}
        </Button>)

    screen.debug()
  })
  test('Button component contains element with props value', () => {
    const buttonProps = {
      onClick: () => {},
      type: 'success',
      disabled: false,
      children: 'button'
    }

    render(<Button
        type={buttonProps.type}
        disabled={buttonProps.disabled}
        >
            {buttonProps.children}
        </Button>)

    expect(screen.getByText('button')).toBeInTheDocument()
  })
  test('Button component use callback after click', () => {
    const onClicked = jest.fn()

    const buttonProps = {
      onClick: onClicked,
      type: 'success',
      disabled: false,
      children: 'button'
    }

    render(<Button
        type={buttonProps.type}
        disabled={buttonProps.disabled}
        onClick={buttonProps.onClick}
        >
            {buttonProps.children}
        </Button>)

    fireEvent.click(screen.getByText('button'))

    expect(onClicked).toHaveBeenCalled()
  })
  test('Button component recieve disabled true - button is disabled', () => {
    const buttonProps = {
      onClick: () => {},
      type: 'success',
      disabled: true,
      children: 'button'
    }

    render(<Button
        type={buttonProps.type}
        disabled={buttonProps.disabled}
        >
            {buttonProps.children}
        </Button>)

    expect(screen.getByText('button')).toBeDisabled()
  })
})
