import React, { Component } from 'react'
import { type CostItemType } from '../../Infrastructure/Types/CostItemType'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Select from '../../UI/Select/Select'
import { type CategoryType } from '../../Infrastructure/Types/CategoryType'

export interface ICostItemAddProps {
  onAdd: (item: CostItemType) => void
  categories: CategoryType[]
};

export interface ICostItemAddState {
  costItem: CostItemType
  formControls: IAddCostFormInputs
  categories: CategoryType[]
  enabledButton: boolean
};

interface IFormParams {
  value: string
  type: string
  label: string
  errorMessage: string
  valid: boolean
  touched: boolean
  validation: validationType
}

interface validationType {
  required: boolean
  isDigit: boolean
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
        label: 'Наименование',
        errorMessage: 'Введите корректное имя',
        valid: false,
        touched: false,
        validation: {
          required: true,
          isDigit: false
        }
      },
      store: {
        value: '',
        type: 'text',
        label: 'Магазин',
        errorMessage: 'Введите корректый магазин',
        valid: false,
        touched: false,
        validation: {
          required: true,
          isDigit: false
        }
      },
      cost: {
        value: '',
        type: 'text',
        label: 'Цена',
        errorMessage: 'Введите корректную цену',
        valid: false,
        touched: false,
        validation: {
          required: true,
          isDigit: true
        }
      }
    },
    costItem: {
      name: '',
      cost: 0,
      category: this.props.categories[0].name,
      store: '',
      date: '2023-07-22',
      id: 1
    },
    categories: [...this.props.categories],
    enabledButton: false
  }

  onCostItemAdd = (): void => {
    const newCostItem = { ...this.state.costItem }
    newCostItem.cost = +this.state.formControls.cost.value
    newCostItem.store = this.state.formControls.store.value
    newCostItem.name = this.state.formControls.name.value
    this.props.onAdd(newCostItem)
  }

  renderInputs (): JSX.Element[] {
    return Object.keys(this.state.formControls)
      .map((controlName, index) => {
        const control: IFormParams = (this.state.formControls)[controlName as keyof IAddCostFormInputs]
        return (
          <Input key={controlName + index.toString()}
            type={control.type}
            value={control.value}
            label={control.label}
            shouldValidate={true}
            valid={control.valid}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={ event => {
              this.onChangeHandler(event, controlName)
            } }
          />
        )
      })
  }

  validateControl = (value: string, validation: validationType): boolean => {
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.isDigit) {
      isValid = isValid && /^\d+$/.test(value)
    }
    return isValid
  }

  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, controlName: string): void => {
    const formControls = { ...this.state.formControls }
    const control: IFormParams = { ...(this.state.formControls)[controlName as keyof IAddCostFormInputs] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation);

    (formControls as any)[controlName] = control

    const enabledButton = formControls.cost.valid && formControls.name.valid && formControls.store.valid &&
    formControls.cost.touched && formControls.name.touched && formControls.store.touched

    this.setState({
      formControls,
      enabledButton
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
          <Select label='Категория' value={this.state.costItem.category} onChange={this.onSelectHandler} options={this.state.categories.map(x => x.name)}></Select>
          <Button onClick={this.onCostItemAdd} type='success' disabled={
            !this.state.enabledButton
            }>Добавить</Button>
        </form >
      </div >
    )
  }
}
