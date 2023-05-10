import React from 'react'
import { type CallbackFunction, type CostItemType } from '../Types/CostItemType'
import { type ICostItemAddProps } from './Types/CostItemAddTypes'

export class CostItemAdd extends React.Component<ICostItemAddProps, CostItemType> {
  constructor (props: { onAdd: CallbackFunction, costItem: CostItemType }) {
    super(props)
    this.state = this.props.costItem
  }

  onCostItemAdd (): void {
    this.props.onAdd()
  }

  render (): JSX.Element | null {
    return (
        <div>
            <div>
                <div>Название: </div>
                <input type="text" defaultValue={this.state.name}/>
            </div>
            <div>
                <div>Цена: </div>
                <input type="text" defaultValue={this.state.cost}/>
            </div>
            <div>
                <div>Магазин: </div>
                <input type="text" defaultValue={this.state.store}/>
            </div>
            <div>
                <div>Категория: </div>
                <input type="text" defaultValue={this.state.category}/>
            </div>
            <button onClick={this.onCostItemAdd.bind(this)}>Добавить</button>
        </div>
    )
  }
}
