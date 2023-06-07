import React from 'react'
import { CostItemAdd } from './CostItemAdd'

export default {
  title: 'UI/CostItemAdd',
  component: CostItemAdd
}

export const Default = (): JSX.Element => {
  const onAddMock = (): void => {
  }

  return <CostItemAdd onAdd={onAddMock} categories={['1', '2']}/>
}

export const WithoutValues = (): JSX.Element => {
  const onAddMock = (): void => {
  }

  return <CostItemAdd onAdd={onAddMock} categories={['1', '2']}/>
}
