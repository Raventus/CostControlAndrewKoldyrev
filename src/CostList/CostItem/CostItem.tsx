import React, { Component } from 'react'
import { type CostItemType } from '..//Types/CostItemType'
import classes from './CostItem.module.css'
import Button from '../../UI/Button/Button'

export interface ICostItemLProps {
  item: CostItemType
  onDeleted: () => void
}

export interface ICostItemState {
  count: number
}

export class CostItem extends Component<ICostItemLProps, ICostItemState> {
  onDeleteItem = (): void => {
    this.props.onDeleted()
  }

  render (): JSX.Element | null {
    const cls = [
      classes['item-border'],
      classes.CostItem
    ]

    return (
        <div className = {cls.join(' ')}>
        <div>
            Название : { this.props.item.name }
        </div>
        <div>
            Стоимость : { this.props.item.cost }
        </div>
        <div>
            Категория : { this.props.item.category }
        </div>
        <div>
            Магазин : { this.props.item.store }
        </div>
        <Button onClick={ this.onDeleteItem } type='error' disabled={false}>Удалить</Button>
    </div>)
  }
}
