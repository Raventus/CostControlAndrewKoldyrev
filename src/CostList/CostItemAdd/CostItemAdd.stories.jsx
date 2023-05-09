import React from 'react'
import { CostItemAdd } from './CostItemAdd'

export default {
  title: 'UI/CostItemAdd',
  component: CostItemAdd
}

export const Default = () => {
  const costItemExample = {
    name: 'storybook',
    cost: 1000,
    category: 'Category',
    store: 'Store'
  }

  return <CostItemAdd costItem={costItemExample} />
}

export const WithoutValues = () => {
  const costItemExample = {
    name: '',
    cost: 0,
    category: '',
    store: ''
  }

  return <CostItemAdd costItem={costItemExample} />
}
