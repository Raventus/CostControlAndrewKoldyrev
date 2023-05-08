import React from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'

export class CostList extends React.Component<{ items: CostItemType[] }, { costItems: CostItemType[], showForm: boolean }> {
  constructor (props: { items: CostItemType[] }) {
    super(props)
    this.state = {
      costItems: this.props.items,
      showForm: false
    }
    this.brandNewCostItem = {
      name: 'example',
      cost: 0,
      category: 'exampleCat',
      store: 'exampleStore'
    }
  }

  brandNewCostItem: CostItemType

  toogleForm (): void {
    const showForm = !this.state.showForm
    this.setState({ showForm })
  }

  addCostItem (item: CostItemType): void {
    const costItems = this.state.costItems.concat()
    costItems.push(item)
    const showForm = false
    this.setState({ costItems, showForm })

    this.brandNewCostItem = {
      name: '',
      cost: 0,
      category: '',
      store: ''
    }
  }

  deleteCostItem (index: number): void {
    const costItems = this.state.costItems.concat()
    costItems.splice(index, 1)
    this.setState({ costItems })
  }

  render (): JSX.Element | null {
    return (
      <div>
        <button onClick={this.toogleForm.bind(this)}>Добавить</button>

        {this.state.showForm
          ? <CostItemAdd onAdd={this.addCostItem.bind(this, this.brandNewCostItem)} costItem={this.brandNewCostItem} />
          : null}
        {
          this.state.costItems.map((itemCost, index) =>
            <CostItem
              item={itemCost}
              key={index}
              onDeleted={this.deleteCostItem.bind(this, index)} />)
        }
      </div>
    )
  }
}
