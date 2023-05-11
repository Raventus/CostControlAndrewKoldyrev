import React, { Component } from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'

export interface ICostItemListProps {
  items: CostItemType[]
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  brandNewCostItem: CostItemType
}

export class CostList extends Component<ICostItemListProps, ICostItemListState> {
  state = {
    costItems: this.props.items,
    showForm: false,
    brandNewCostItem: {
      name: 'example',
      cost: 0,
      category: 'exampleCat',
      store: 'exampleStore'
    }
  }

  toogleForm = (): void => {
    const showForm = !this.state.showForm
    this.setState({ showForm })
  }

  addCostItem = (): void => {
    const costItems = this.state.costItems.concat()
    costItems.push(this.state.brandNewCostItem)
    const showForm = false
    const brandNewCostItem = {
      name: '',
      cost: 0,
      category: '',
      store: ''
    }
    this.setState({ costItems, showForm, brandNewCostItem })
  }

  deleteCostItem (index: number): void {
    const costItems = [...this.state.costItems]
    costItems.splice(index, 1)
    this.setState({ costItems })
  }

  render (): JSX.Element | null {
    return (
      <div>
        <button onClick={ this.toogleForm }>Добавить</button>

        { this.state.showForm &&
        <CostItemAdd onAdd={ this.addCostItem } costItem={this.state.brandNewCostItem} /> }
        {
          this.state.costItems?.length > 0
            ? this.state.costItems.map((itemCost, index) =>
            <CostItem
              item={itemCost}
              key={index}
              onDeleted={this.deleteCostItem.bind(this, index)} />)
            : 'Здесь пока нет элементов покупок'
        }
      </div>
    )
  }
}
