import React from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'
import { type ICostItemListProps, type ICostItemListState } from './Types/CostItemListTypes'

export class CostList extends React.Component<ICostItemListProps, ICostItemListState> {
  constructor (props: ICostItemListProps) {
    super(props)
    this.state = {
      costItems: this.props.items,
      showForm: false,
      brandNewCostItem: {
        name: 'example',
        cost: 0,
        category: 'exampleCat',
        store: 'exampleStore'
      }
    }
  }

  toogleForm (): void {
    const showForm = !this.state.showForm
    this.setState({ showForm })
  }

  addCostItem (item: CostItemType): void {
    const costItems = this.state.costItems.concat()
    costItems.push(item)
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
        <button onClick={this.toogleForm.bind(this)}>Добавить</button>

        { this.state.showForm &&
        <CostItemAdd onAdd={this.addCostItem.bind(this, this.state.brandNewCostItem)} costItem={this.state.brandNewCostItem} /> }
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
