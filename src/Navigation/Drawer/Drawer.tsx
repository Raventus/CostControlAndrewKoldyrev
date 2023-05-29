import React, { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
  'CostItems', 'Создать категорию', 'Добавить магазин'
]
export interface IDrawerProps {
  isOpen: boolean
  onClose: () => void
}

class Drawer extends Component<IDrawerProps> {
  renderLinks (): JSX.Element[] {
    return links.map((link, index) => {
      return (
                <li key={index}>
                    <a>Link {link} </a>
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
