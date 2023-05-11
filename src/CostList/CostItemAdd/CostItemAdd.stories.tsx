import React from 'react'
import { CostItemAdd } from './CostItemAdd'

export default {
  title: 'UI/CostItemAdd',
  component: CostItemAdd
}

export const Default = (): JSX.Element => {
  const costItemExample = {
    name: 'storybook',
    cost: 1000,
    category: 'Category',
    store: 'Store'
  }

  const onAddMock = (): void => {
  }

  return <CostItemAdd costItem={costItemExample} onAdd={onAddMock} />
}

export const WithoutValues = (): JSX.Element => {
  const costItemExample = {
    name: '',
    cost: 0,
    category: '',
    store: ''
  }
  const onAddMock = (): void => {
  }

  return <CostItemAdd costItem={costItemExample} onAdd={onAddMock} />
}
