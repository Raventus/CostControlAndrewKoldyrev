import React, { Component } from 'react'
import { type CostItemType } from '../Types/CostItemType'

export interface ICostItemAddProps {
  onAdd: () => void
  costItem: CostItemType
};

export class CostItemAdd extends Component<ICostItemAddProps, CostItemType> {
  state = this.props.costItem

  onCostItemAdd = (): void => {
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
            <button onClick={ this.onCostItemAdd }>Добавить</button>
        </div>
    )
  }
}
