import React from 'react'
import classes from './CategoriesContainer.module.css'
import { type CostItemType } from '../CostList/Types/CostItemType'
import CategoriesList from './CateforiesList/CategoriesList'
import { withBoxStyle } from '../hoc/withBoxStyle/withBoxStyle'

export interface ICategoriesProps {
  categories: string[]
  items: CostItemType[]
}

export interface ICategoriesContainerState {
  categoriesWithCosts: categoriesWithCosts[]
}

interface categoriesWithCosts {
  category: string
  costs: number
}

// Container component
class CategoriesContainer extends React.PureComponent<ICategoriesProps, ICategoriesContainerState> {
  constructor (props: ICategoriesProps) {
    super(props)

    this.state =
    {
      categoriesWithCosts: this.SetCostsToCategories(this.props.categories, this.props.items)
    }
  }

  SetCostsToCategories = (categories: string[], items: CostItemType[]): categoriesWithCosts[] => {
    console.log()
    return categories.map((currentCategory, index) => {
      const category = currentCategory
      const costs = items.reduce((accumulator, currentValue) => {
        if (currentValue.category === category) {
          accumulator += currentValue.cost
        }
        return accumulator
      }, 0)
      return {
        costs,
        category
      }
    })
  }

  render (): JSX.Element {
    return (
      <div className={classes.Categories}>
        <div>Категории</div>
        <ol>
          {
            this.state.categoriesWithCosts.map((categoryWithCosts: categoriesWithCosts, index: number) => {
              const WithBoxStyleHoc = withBoxStyle(CategoriesList)
              return <WithBoxStyleHoc key = {index} category={ categoryWithCosts.category} costs={categoryWithCosts.costs}/>
            })
        }
        </ol>
      </div>
    )
  }
}

export default CategoriesContainer
