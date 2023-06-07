import React from 'react'
import classes from './Backdrop.module.css'

export interface IBackdropProps {
  onClick: () => void
}

const Backdrop = (props: IBackdropProps): JSX.Element => <div className={classes.Backdrop}
onClick={props.onClick}/>

export default Backdrop
