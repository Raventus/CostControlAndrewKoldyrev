import React, { Component } from 'react'
import { type CostItemType } from './Types/CostItemType'
import { CostItem } from './CostItem/CostItem'
import { CostItemAdd } from './CostItemAdd/CostItemAdd'
import Button from '../UI/Button/Button'
import classes from './CostList.style.module.css'
import { connect } from 'react-redux'
import { addCostItemActionCreator, deleteCostItemActionCreator } from '../redux/actions/costItemActions'
import { type Dispatch } from 'redux'
import { toogleAddCostItemFormActionCreator } from '../redux/actions/uiActions'
import { type storeValuesType } from '../redux/reducers/rootReducer'
import { MonthPicker } from '../MonthPicker/MonthPicker'

export interface ICostItemListProps {
  costItems: CostItemType[]
  categories: string[]
  showForm: boolean
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  categories: string []
}

export class CostList extends Component<ICostItemListProps & DispatchProps, ICostItemListState> {
  render (): JSX.Element | null {
    return (
      <div className={classes.CostItemList}>
        <MonthPicker />
        <Button onClick={ this.props.toogleForm } disabled={false} type='primary'>Добавить расход</Button>
        {
          this.props.showForm &&
          <CostItemAdd onAdd={ this.props.addCostItem } categories = {this.props.categories}/>
        }

        {
          this.props.costItems?.length > 0
            ? this.props.costItems.map((itemCost, index) =>
            <CostItem
              item={itemCost}
              key={index}
              onDeleted={this.props.deleteCostItem.bind(this, index)} />)
            : 'Здесь пока нет элементов покупок'
        }
      </div>
    )
  }
}

function mapStateToProps (state: storeValuesType): ICostItemListState {
  const props = {
    costItems: state.costItems,
    showForm: state.uiShow.showAddCostItemForm,
    categories: state.categories
  }
  return props
}

interface DispatchProps {
  addCostItem: typeof addCostItemActionCreator
  deleteCostItem: typeof deleteCostItemActionCreator
  toogleForm: typeof toogleAddCostItemFormActionCreator
}

function mapDispatchToProps (dispatch: Dispatch): DispatchProps {
  return {
    addCostItem: (item: CostItemType) => dispatch(addCostItemActionCreator(item)),
    deleteCostItem: (index: number) => dispatch(deleteCostItemActionCreator(index)),
    toogleForm: () => dispatch(toogleAddCostItemFormActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostList)
