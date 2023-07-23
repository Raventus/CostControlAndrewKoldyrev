import React, { type FC } from 'react'
import moment from 'moment'
import classes from './MonthPicker.module.css'
import Input from '../UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { type storeValuesType } from '../redux/reducers/rootReducer'
import { changeMonthToCalculate } from '../redux/actions/dateTimeActions'

export const MonthPicker: FC = () => {
  moment.locale('ru')
  const monthToShow = useSelector((state: storeValuesType) => {
    return state.monthToCalculate
  })

  const dispatch = useDispatch()

  const changeMonthToCalculateAdd = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nextDate = event.target.value
    dispatch(changeMonthToCalculate(nextDate))
  }

  return (
    <div className={classes.DatePicker}>
        <Input
        type='month'
        label='Месяц:'
        value={ monthToShow }
        valid={true}
        touched={true}
        errorMessage=''
        shouldValidate={false}
        onChange={changeMonthToCalculateAdd}/>
    </div>
  )
}
