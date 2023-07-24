import React from 'react'
import classes from './Input.module.css'

interface InputProps {
  type: string
  label: string
  value: string | number
  valid: boolean
  touched: boolean
  errorMessage: string
  shouldValidate: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps): JSX.Element => {
  const inputType = props.type ?? 'text'

  const cls = [
    classes.Input
  ]
  const htmlFor = `${inputType}- ${Math.random()}`

  function isInvalid (props: InputProps): boolean {
    return !props.valid && props.shouldValidate && props.touched
  }

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label className={ classes.LabelText } htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}>
      </input>

      {
        isInvalid(props)
          ? <span>{props.errorMessage ?? 'Введите верное значение'}</span>
          : null
      }
    </div>
  )
}

export default Input
