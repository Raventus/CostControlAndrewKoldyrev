import React from 'react'
import { CostItem } from './CostItem'

export default {
  title: 'UI/CostItem',
  component: CostItem
}

export const Default = (): JSX.Element => {
  const costItemExample = {
    name: 'storybook',
    cost: 10000,
    category: 'Category',
    store: 'Store',
    date: '2023-08',
    id: 1
  }

  const onDeleted: () => void = () => {}

  return <CostItem item={costItemExample} onDeleted = {onDeleted} />
}

export const WithoutValues = (): JSX.Element => {
  const costItemExample = {
    name: '',
    cost: 0,
    category: '',
    store: '',
    date: '2023-08',
    id: 1
  }

  const onDeleted: () => void = () => {}

  return <CostItem item={costItemExample} onDeleted = {onDeleted} />
}
