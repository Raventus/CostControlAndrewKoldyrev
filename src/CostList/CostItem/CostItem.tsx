import React, { Component } from 'react'
import { type CostItemType, type CallbackFunction } from '..//Types/CostItemType'
import classes from './CostItem.module.css'

export interface ICostItemLProps {
  item: CostItemType
  onDeleted: CallbackFunction
  key: number
}

export interface ICostItemState {
  count: number
}

export class CostItem extends Component<ICostItemLProps, ICostItemState> {
  onDeleteItem = (): void => {
    this.props.onDeleted()
  }

  render (): JSX.Element | null {
    return (
        <div className = {classes['item-border']}>
        <div >
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
        <button onClick={ this.onDeleteItem }>Удалить</button>
    </div>)
  }
}
