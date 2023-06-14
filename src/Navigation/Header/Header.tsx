import React from 'react'
import classes from './Header.module.css'
import { useTokenContext } from '../../Infrastructure/TokenProvider/TokenProvider'
import Button from '../../UI/Button/Button'

const Header = (): JSX.Element => {
  const tokenContext = useTokenContext()
  const logout = tokenContext?.[1].logout as () => void
  const token = tokenContext?.[0]

  if (token !== undefined && token !== null) {
    return (<div className={classes.Header}>
    <Button onClick={(logout)} type="error" disabled={false}>
      Выйти
    </Button>
  </div>)
  } else {
    return <>
    </>
  }
}

export default Header
