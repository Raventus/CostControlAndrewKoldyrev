import React, { Component } from 'react'
import { type CostItemType } from '../Types/CostItemType'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Select from '../../UI/Select/Select'

export interface ICostItemAddProps {
  onAdd: (item: CostItemType) => void
  categories: string[]
};

export interface ICostItemAddState {
  costItem: CostItemType
  formControls: IAddCostFormInputs
  categories: string[]
};

interface IFormParams {
  value: string
  type: string
  label: string
}

interface IAddCostFormInputs {
  name: IFormParams
  store: IFormParams
  cost: IFormParams
}

export class CostItemAdd extends Component<ICostItemAddProps, ICostItemAddState> {
  state: ICostItemAddState = {
    formControls: {
      name: {
        value: '',
        type: 'text',
        label: 'Наименование'
      },
      store: {
        value: '',
        type: 'text',
        label: 'Магазин'
      },
      cost: {
        value: '',
        type: 'text',
        label: 'Цена'
      }
    },
    costItem: {
      name: '',
      cost: 0,
      category: this.props.categories[0],
      store: ''
    },
    categories: [...this.props.categories]
  }

  onCostItemAdd = (): void => {
    const newCostItem = { ...this.state.costItem }
    newCostItem.cost = +this.state.formControls.cost.value
    newCostItem.store = this.state.formControls.store.value
    newCostItem.name = this.state.formControls.name.value
    console.log(newCostItem)
    this.props.onAdd(newCostItem)
  }

  renderInputs (): JSX.Element[] {
    return Object.keys(this.state.formControls)
      .map((controlName, index) => {
        const control: any = (this.state.formControls as any)[controlName]
        return (
          <Input key={controlName + index.toString()}
            type={control.type}
            value={control.value}
            label={control.label}
            onChange={ event => {
              this.onChangeHandler(event, controlName)
            } }
          />
        )
      })
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, controlName: string): void => {
    const formControls = { ...this.state.formControls }
    const control = { ...(this.state.formControls as any)[controlName] }

    control.value = event.target.value;

    (formControls as any)[controlName] = control

    this.setState({
      formControls
    })
  }

  onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newCostItem = { ...this.state.costItem }
    newCostItem.category = event.target.value
    this.setState({
      costItem: newCostItem
    })
  }

  render (): JSX.Element | null {
    return (
      <div>
        <form>
          {this.renderInputs()}
          <Select label='Категория' value={this.state.costItem.category} onChange={this.onSelectHandler} options={this.state.categories}></Select>
          <Button onClick={this.onCostItemAdd} type='success' disabled={false}>Добавить</Button>
        </form >
      </div >
    )
  }
}
