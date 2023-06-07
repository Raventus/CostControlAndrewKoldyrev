import React, { Component } from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'
import deepEqual from 'fast-deep-equal'
import Button from '../UI/Button/Button'
import classes from './CostList.style.module.css'

export interface ICostItemListProps {
  items: CostItemType[]
  categories: string[]
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
}

export class CostList extends Component<ICostItemListProps, ICostItemListState> {
  constructor (props: ICostItemListProps) {
    super(props)
    this.state = {
      costItems: this.props.items,
      showForm: false
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
      .catch((error) => {
        console.log(error)
      })

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

  addCostItem (newCostItem: CostItemType): void {
    const costItems = [...this.state.costItems, newCostItem]
    const showForm = false
    this.setState({ costItems, showForm })
  }

  deleteCostItem (index: number): void {
    const costItems = [...this.state.costItems]
    costItems.splice(index, 1)
    this.setState({ costItems })
  }

  render (): JSX.Element | null {
    return (
      <div className={classes.CostItemList}>
        <Button onClick={ this.toogleForm } disabled={false} type='primary'>Добавить</Button>

        {
          // 4. Условный рендеринг
          this.state.showForm &&
          <CostItemAdd onAdd={ this.addCostItem } categories = {this.props.categories}/> }
        {
          // 4. Условный рендеринг
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
