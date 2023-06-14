import React from 'react'
import classes from './Button.module.css'

export interface IButtonProps {
  onClick: () => void
  type: string
  disabled: boolean
  children: string
}

// 1. Функциональный компонент, 2. Деструктуризация props
const Button = ({ type, disabled, children, onClick }: IButtonProps): JSX.Element => {
  const cls = [
    classes.Button,
    classes[type]
  ]

  return (
        <button
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}
        >
            {
              // 5. Children types
            children
            }
        </button>
  )
}

export default Button
