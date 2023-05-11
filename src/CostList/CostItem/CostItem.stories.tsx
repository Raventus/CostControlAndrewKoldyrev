import React from 'react'
import { CostItem } from './CostItem'

export default {
  title: 'UI/CostItem',
  component: CostItem
}

export const Default = () => {
  const costItemExample = {
    name: 'storybook',
    cost: 10000,
    category: 'Category',
    store: 'Store'
  }

  return <CostItem item={costItemExample} />
}

export const WithoutValues = () => {
  const costItemExample = {
    name: '',
    cost: 0,
    category: '',
    store: ''
  }

  return <CostItem item={costItemExample} />
}
