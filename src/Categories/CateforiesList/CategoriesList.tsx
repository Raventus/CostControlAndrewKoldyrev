import React from 'react'

export interface ICategoriesListProps {
  category: string
  costs: number
}

const CategoriesList = ({ category, costs }: ICategoriesListProps): JSX.Element => {
  return (
    <li>
        {category} : {costs}
    </li>

  )
}

export default CategoriesList
