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
import groupBy from 'lodash.groupby'

export interface ICostItemListProps {
  costItems: CostItemType[]
  categories: string[]
  showForm: boolean
  monthToCalculate: string
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  categories: string[]
}

export class CostList extends Component<ICostItemListProps & DispatchProps, ICostItemListState> {
  render (): JSX.Element | null {
    const costItemsOnMonth = this.props.costItems.filter(x => x.date.includes(this.props.monthToCalculate))
    const organizedByDate = Object.entries(groupBy(costItemsOnMonth, x => x.date))
    console.log()

    return (
      <div className={classes.CostItemList}>
        <MonthPicker />
        <Button onClick={this.props.toogleForm} disabled={false} type='primary'>Добавить расход</Button>
        {
          this.props.showForm &&
          <CostItemAdd onAdd={this.props.addCostItem} categories={this.props.categories} />
        }
 {
          costItemsOnMonth?.length > 0
            ? organizedByDate.map((dateItems, index) => {
              return (
                <>
                  <div key={dateItems[0]}>{dateItems[0]}</div>
                  {
                    dateItems[1].map((itemCost, innerIndex) => {
                      return (
                        <CostItem
                          key={itemCost.id}
                          item={itemCost}
                          onDeleted={this.props.deleteCostItem.bind(this, (index + 1) * innerIndex)} />
                      )
                    })
                  }
                </>
              )
            }

            )
            : <div className={classes.EmptyCostItemList}> Здесь пока нет элементов покупок </div>
        }
      </div>
    )
  }
}

function mapStateToProps (state: storeValuesType): ICostItemListState {
  const props = {
    costItems: state.costItems,
    showForm: state.uiShow.showAddCostItemForm,
    categories: state.categories,
    monthToCalculate: state.monthToCalculate
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
