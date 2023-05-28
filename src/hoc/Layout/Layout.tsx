import React, { Component } from 'react'
import classes from './Layout.module.css'

export interface LayoutProps {
  children: string | JSX.Element
};

export interface LayoutState {
  menu: boolean
}

class Layout extends Component<LayoutProps, LayoutState> {
  state = {
    menu: false
  }

  render (): JSX.Element {
    return (
        <div className = {classes.Layout}>
           <main>
                { this.props.children }
            </main>
        </div>
    )
  }
}

export default Layout
