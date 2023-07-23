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
import groupBy from 'lodash.groupby'
import moment from 'moment'
import { type SalaryByMonth } from './Types/SalaryByMonth'
import { AnalyticsMonthRow } from '../Analytics/AnalyticsMonthRow/AnalyticsMonthRow'

export interface ICostItemListProps {
  costItems: CostItemType[]
  categories: string[]
  showForm: boolean
  monthToCalculate: string
  salary: SalaryByMonth[]
};

export interface ICostItemListState {
  costItems: CostItemType[]
  showForm: boolean
  categories: string[]
  salary: SalaryByMonth[]
}

export class CostList extends Component<ICostItemListProps & DispatchProps, ICostItemListState> {
  render (): JSX.Element | null {
    moment.locale('ru')
    const costItemsOnMonth = this.props.costItems.filter(x => x.date.includes(this.props.monthToCalculate))
    const organizedByDate = Object.entries(groupBy(costItemsOnMonth, x => x.date)).reverse()

    return (
      <div className={classes.CostItemList}>
        <AnalyticsMonthRow/>
        <Button onClick={this.props.toogleForm} disabled={false} type='primary'>Добавить расход</Button>
        {
          this.props.showForm &&
          <CostItemAdd onAdd={this.props.addCostItem} categories={this.props.categories} />
        }
        {
          costItemsOnMonth?.length > 0
            ? organizedByDate.map((dateItems, index) => {
              const costByDay = dateItems[1].reduce((currentSum, currentCost) => {
                return currentSum + currentCost.cost
              }, 0)
              return (
                <div key={index}>
                  <div key={dateItems[0]} className={classes.DateHeader}>{moment(dateItems[0]).format('DD MMMM')} : {costByDay} рублей</div>
                  {
                    dateItems[1].reverse().map((itemCost, innerIndex) => {
                      return (
                        <CostItem
                          key={itemCost.id}
                          item={itemCost}
                          onDeleted={this.props.deleteCostItem.bind(this, itemCost.id)} />
                      )
                    })
                  }
                </div>
              )
            })
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
    monthToCalculate: state.monthToCalculate,
    salary: state.salary
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
    addCostItem: (item: CostItemType) => {
      dispatch(toogleAddCostItemFormActionCreator())
      return dispatch(addCostItemActionCreator(item))
    },
    deleteCostItem: (index: number) => dispatch(deleteCostItemActionCreator(index)),
    toogleForm: () => dispatch(toogleAddCostItemFormActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CostList)
