import React from 'react'
import classes from './withBoxStyle.module.css'

const withBoxStyle = <P extends object>(ComponentToRender: React.ComponentType<P>) =>
  (props: P) => {
    const cls = [
      classes.Box,
      classes.Border
    ]

    const hocComponent = (props: any): JSX.Element => {
      return (<div className={cls.join(' ')}>
            <ComponentToRender {... props}/>
        </div>)
    }

    // hocComponent.key = 'withBoxStyle'
    return hocComponent
  }

export default withBoxStyle
