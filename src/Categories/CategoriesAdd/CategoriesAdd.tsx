import React, { useState, type FC } from 'react'
import moment from 'moment'
import classes from './CategoriesAdd.module.css'
import Input from '../../UI/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../UI/Button/Button'
import { addCategoryActionCreator } from '../../redux/actions/catrgoryActions'
import { type storeValuesType } from '../../redux/reducers/rootReducer'

interface IInputWithValidation {
  value: string
  type: string
  label: string
  errorMessage: string
  valid: boolean
  touched: boolean
  validation: IValidation
}

interface IValidation {
  required: true
  unique: true
}

export const CategoriesAdd: FC = () => {
  moment.locale('ru')

  const [control, changeControl] = useState<IInputWithValidation>({
    value: '',
    type: 'text',
    label: 'Новая категория:',
    errorMessage: 'Данная категория уже существует',
    valid: false,
    touched: false,
    validation: {
      required: true,
      unique: true
    }
  })

  const existCategories = useSelector((state: storeValuesType) => {
    return state.categories.map(x => x.name)
  })

  const dispatch = useDispatch()

  const changeCategory = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newControl = { ...control }
    newControl.value = event.target.value
    newControl.touched = true
    newControl.valid = validateControl(newControl.value, newControl.validation)
    changeControl(newControl)
  }

  const validateControl = (value: string, validation: IValidation): boolean => {
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.unique) {
      isValid = !existCategories.some(x => x === value)
    }
    return isValid
  }

  const addNewCategory = (): void => {
    dispatch(addCategoryActionCreator(control.value))
    const newControl = { ...control }
    newControl.value = ''
    newControl.touched = false
    newControl.valid = true
    changeControl(newControl)
  }

  return (
    <div className={classes.CategoriesAdd}>
    <Input
        type={control.type}
        label={control.label}
        value={ control.value }
        valid={control.valid}
        touched={control.touched}
        errorMessage={control.errorMessage}
        shouldValidate={true}
        onChange={changeCategory}/>
        <Button onClick={addNewCategory} type='success' disabled={!control.valid}>Добавить</Button>
    </div>
  )
}
