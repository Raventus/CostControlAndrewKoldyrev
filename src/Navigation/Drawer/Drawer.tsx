import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { NavLink, type NavLinkProps } from 'react-router-dom'
import cn from 'clsx'

const links = [
  {
    to: '/',
    label: 'Список покупок'
  },
  {
    to: '/categories',
    label: 'Категории'
  },
  {
    to: '/analytics',
    label: 'Аналитика'
  }
]

export interface IDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export const getClassName: NavLinkProps['className'] = ({ isActive }) => cn(classes.link, isActive && classes.active)

class Drawer extends Component<IDrawerProps> {
  clickHandler = (): void => {
    this.props.onClose()
  }

  renderLinks (): JSX.Element[] {
    return links.map((link, index) => {
      return (
                <li key={index}>
                   <NavLink
                   className={getClassName}
                    to={link.to}
                    onClick={this.clickHandler}>
                        {link.label}
                    </NavLink>
                </li>
      )
    })
  }

  render (): JSX.Element {
    const cls = [
      classes.Drawwer
    ]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
            <>
            <nav className={cls.join(' ')}>
                <ul>
                  {this.renderLinks()}
                </ul>
            </nav>
            {this.props.isOpen
              ? <Backdrop onClick={this.props.onClose}/>
              : null}
            </>
    )
  }
}

export default Drawer
