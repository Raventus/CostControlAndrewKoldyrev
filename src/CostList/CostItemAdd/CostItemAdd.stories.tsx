import React from 'react'
import { CostItemAdd } from './CostItemAdd'

export default {
  title: 'UI/CostItemAdd',
  component: CostItemAdd
}

export const Default = (): JSX.Element => {
  const onAddMock = (): void => {
  }
  const Categories = [
    {
      id: 1,
      name: '1'
    },
    {
      id: 2,
      name: '2'
    }
  ]

  return <CostItemAdd onAdd={onAddMock} categories={Categories}/>
}

export const WithoutValues = (): JSX.Element => {
  const onAddMock = (): void => {
  }

  const Categories = [
    {
      id: 1,
      name: '1'
    },
    {
      id: 2,
      name: '2'
    }
  ]

  return <CostItemAdd onAdd={onAddMock} categories={Categories}/>
}
