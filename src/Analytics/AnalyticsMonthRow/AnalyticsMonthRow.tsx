import React, { type FC } from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { MonthPicker } from '../../MonthPicker/MonthPicker'
import { type storeValuesType } from '../../redux/reducers/rootReducer'
import classes from './AnalyticsMonthRow.module.css'

export const AnalyticsMonthRow: FC = () => {
  moment.locale('ru')
  const monthToShow = useSelector((state: storeValuesType) => {
    return state.monthToCalculate
  })

  const salary = useSelector((state: storeValuesType) => {
    return state.salary
  })

  const costItems = useSelector((state: storeValuesType) => {
    return state.costItems
  })

  const costItemsOnMonth = costItems.filter(x => x.date.includes(monthToShow))
  const costByMonth = costItemsOnMonth.reduce((currentSum, currentCost) => {
    return currentSum + currentCost.cost
  }, 0)

  const salaryMonth = salary.find(x => x.month === monthToShow)?.salary
  const rest = salaryMonth !== undefined ? salaryMonth - costByMonth : 0

  return (
    <div className={classes.AnalyticsMonthRow}>
    <MonthPicker />
    <div className={classes.DateHeader}>Траты за месяц: {costByMonth} рублей</div>
    <div className={classes.DateHeader}>Зарплата: { salaryMonth } рублей</div>
    <div className={classes.DateHeader}>Остаток: { rest } рублей</div>
    </div>
  )
}
