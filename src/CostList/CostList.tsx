import React, { Component } from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'
import deepEqual from 'fast-deep-equal'

export interface ICostItemListProps {
  items: CostItemType[]
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  brandNewCostItem: CostItemType
}

export class CostList extends Component<ICostItemListProps, ICostItemListState> {
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

    this.addCostItem = this.addCostItem.bind(this)
  }

  handleClick = (e: MouseEvent): void => {
    console.log({ x: e.clientX, y: e.clientY })
  }

  controller: AbortController = new AbortController()

  async componentDidMount (): Promise<void> {
    await fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: this.controller.signal })
      .then(async (response): Promise<void> => await response.json())
      .then(json => {
        if (!this.controller.signal.aborted) {
          console.log(json)
        }
      })
      .catch()

    window.addEventListener('click', this.handleClick)
  }

  componentWillUnmount (): void {
    this.controller.abort()
    window.removeEventListener('click', this.handleClick)
  }

  componentDidUpdate (prevProps: Readonly<ICostItemListProps>, prevState: Readonly<ICostItemListState>, snapshot?: any): void {
    if (this.state.costItems.some(x => x.category === ''.trim() || x.store === ''.trim() || x.cost <= 0 || x.name === ''.trim())) {
      const items = this.state.costItems.filter(x => x.category !== ''.trim() && x.store !== ''.trim() && x.cost > 0 && x.name !== ''.trim())
      this.setState({
        costItems: items
      })
    }
  }

  shouldComponentUpdate (nextProps: Readonly<ICostItemListProps>, nextState: Readonly<ICostItemListState>, nextContext: any): boolean {
    return !deepEqual(this.state, nextState)
  }

  toogleForm = (): void => {
    const showForm = !this.state.showForm
    this.setState({ showForm })
  }

  addCostItem (): void {
    const costItems = [...this.state.costItems, this.state.brandNewCostItem]
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
