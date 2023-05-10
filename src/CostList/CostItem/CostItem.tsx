import React from 'react'
import { type ICostItemLProps, type ICostItemState } from './Types/CostItemTypes'
import classes from './CostItem.module.css'

export class CostItem extends React.Component<ICostItemLProps, ICostItemState> {
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
        <button onClick={this.onDeleteItem}>Удалить</button>
    </div>)
  }
}
