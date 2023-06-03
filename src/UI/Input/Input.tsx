import React from 'react'
import classes from './Input.module.css'

interface InputProps {
  type: string
  label: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps): JSX.Element => {
  const inputType = props.type ?? 'text'

  const cls = [
    classes.Input
  ]
  const htmlFor = `${inputType}- ${Math.random()}`

  return (
        <div className={cls.join(' ')}>
            <label htmlFor={ htmlFor }>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}>
                </input>
        </div>
  )
}

export default Input
