import React from 'react'
import classes from './withBoxStyle.module.css'

export const withBoxStyle = <P extends object>(ComponentToRender: React.ComponentType<P>): {
  (props: P): JSX.Element
  displayName: string
} => {
  const WithBoxStyle = (props: P): JSX.Element => {
    const cls = [
      classes.Box,
      classes.Border
    ]
    return (<div className={cls.join(' ')}>
            <ComponentToRender {... props}/>
        </div>)
  }

  WithBoxStyle.displayName = 'WithBoxStyle'
  return WithBoxStyle
}
