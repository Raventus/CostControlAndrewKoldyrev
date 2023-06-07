import React, { Component } from 'react'
import classes from './Layout.module.css'
import MenuToogle from '../../Navigation/MenuToogle/MenuToogle'
import Drawer from '../../Navigation/Drawer/Drawer'

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

  toogleMenuHandler = (): void => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = (): void => {
    this.setState({
      menu: false
    })
  }

  render (): JSX.Element {
    return (
        <div className = {classes.Layout}>
              <Drawer
                isOpen={
                    this.state.menu
                }
                onClose={this.menuCloseHandler}
            />
            <MenuToogle
                onToogle={this.toogleMenuHandler}
                isOpen={
                    this.state.menu
                }
            />
           <main>
                { this.props.children }
            </main>
        </div>
    )
  }
}

export default Layout
