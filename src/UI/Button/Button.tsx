import React from 'react'
import classes from './Button.module.css'

export interface IButtonProps {
  onClick: () => void
  type: string
  disabled: boolean
  children: string
}

const Button = (props: IButtonProps): JSX.Element => {
  console.log(classes)
  const cls = [
    classes.Button,
    classes[props.type]
  ]

  return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
  )
}

export default Button
