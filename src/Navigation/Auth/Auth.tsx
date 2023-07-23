import React, { useState } from 'react'
import classes from './Auth.module.css'
import Button from '../../UI/Button/Button'
import { useTokenContext } from '../../Infrastructure/TokenProvider/TokenProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { type NavigationState } from '../Types/types'
import Input from '../../UI/Input/Input'
import is from 'is_js'

interface IInputWithValidation {
  value: string
  type: string
  label: string
  errorMessage: string
  valid: boolean
  touched: boolean
  validation: IValidation
}

interface IValidation {
  required: true
  email: true
}

const Auth = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()
  const onClick = (): void => {
    const state = location.state as NavigationState
    login()
    navigate(state?.from ?? '/')
  }

  const tokenContext = useTokenContext()
  const login = tokenContext?.[1].login as () => void

  const [control, changeControl] = useState<IInputWithValidation>({
    value: '',
    type: 'email',
    label: 'Email',
    errorMessage: 'Введите корректный email',
    valid: false,
    touched: false,
    validation: {
      required: true,
      email: true
    }
  })

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newControl = { ...control }
    newControl.value = event.target.value
    newControl.touched = true
    newControl.valid = validateControl(control.value, control.validation)
    changeControl(newControl)
  }

  const validateControl = (value: string, validation: IValidation): boolean => {
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.email) {
      isValid = is.email(value)
    }
    return isValid
  }

  return (
    <div className={classes.AuthBlock}>
      <div className={classes.Auth}>
        <div>Авторизация</div>
        <Input
          valid={control.valid}
          shouldValidate={true}
          touched={control.touched}
          errorMessage={control.errorMessage}
          type={control.type}
          value={control.value}
          label={control.label}
          onChange={onChangeHandler} />
        <Button
          disabled={!control.valid}
          type='success'
          onClick={onClick}
        >
          Войти
        </Button>
      </div>
    </div>
  )
}

export default Auth
