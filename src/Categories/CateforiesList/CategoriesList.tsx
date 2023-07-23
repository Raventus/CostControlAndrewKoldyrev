import React from 'react'

export interface ICategoriesListProps {
  category: string
  costs: number
}

const CategoriesList = ({ category, costs }: ICategoriesListProps): JSX.Element => {
  return (
    <div>
        {category} : {costs}
    </div>

  )
}

export default CategoriesList
