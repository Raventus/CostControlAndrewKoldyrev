import React from 'react'
import CategoriesList, { type ICategoriesListProps } from './CategoriesList'

export default {
  title: 'UI/CategoriesList',
  component: CategoriesList
}

export const WithoutValues = (): JSX.Element => {
  const categoriesWithPrice: ICategoriesListProps = {
    category: '',
    costs: NaN
  }
  return <CategoriesList {...categoriesWithPrice} />
}

export const Default = (): JSX.Element => {
  const categoriesWithPrice: ICategoriesListProps = {
    category: '1',
    costs: 1000
  }

  return <CategoriesList {...categoriesWithPrice}/>
}
