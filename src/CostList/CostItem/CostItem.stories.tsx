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
    store: 'Store'
  }

  const onDeleted: () => void = () => {}
  const key: number = 1

  return <CostItem item={costItemExample} key = { key } onDeleted = {onDeleted} />
}

export const WithoutValues = (): JSX.Element => {
  const costItemExample = {
    name: '',
    cost: 0,
    category: '',
    store: ''
  }

  const onDeleted: () => void = () => {}
  const key: number = 1

  return <CostItem item={costItemExample} key = { key } onDeleted = {onDeleted} />
}
