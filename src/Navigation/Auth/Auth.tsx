import React from 'react'
import classes from './Auth.module.css'
import Button from '../../UI/Button/Button'
import { useTokenContext } from '../../Infrastructure/TokenProvider/TokenProvider'
import { useLocation, useNavigate } from 'react-router-dom'
import { type NavigationState } from '../Types/types'
import Input from '../../UI/Input/Input'

const Auth = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()
  const onClick = (): void => {
    console.log('clicked!!!!')
    const state = location.state as NavigationState
    login()
    navigate(state?.from ?? '/')
  }

  const tokenContext = useTokenContext()
  const login = tokenContext?.[1].login as () => void

  const control = {
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
  }
  const onChangeHandler = (): void => {

  }
  return (
    <div className={classes.AuthBlock}>
      <div className={classes.Auth}>
        <div>Авторизация</div>
        <Input
          type={control.type}
          value={control.value}
          label={control.label}
          onChange={event => onChangeHandler} />
        <Button
          disabled={false}
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
