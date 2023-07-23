import React from 'react'
import classes from './CategoriesContainer.module.css'
import { type CostItemType } from '../Infrastructure/Types/CostItemType'
import CategoriesList from './CateforiesList/CategoriesList'
import { withBoxStyle } from '../hoc/withBoxStyle/withBoxStyle'
import { type CategoryType } from '../Infrastructure/Types/CategoryType'
import { type storeValuesType } from '../redux/reducers/rootReducer'
import { connect } from 'react-redux'
import { addCategoryActionCreator } from '../redux/actions/catrgoryActions'
import { type Dispatch } from 'redux'
import { CategoriesAdd } from './CategoriesAdd/CategoriesAdd'

export interface ICategoriesProps {
  categories: CategoryType[]
  items: CostItemType[]
}

export interface ICategoriesContainerState {
  categoriesWithCosts: categoriesWithCosts[]
}

interface categoriesWithCosts {
  category: string
  costs: number
}

export interface ICostItemListProps {
  categories: CategoryType[]
};

export class CategoriesContainer extends React.Component<ICategoriesProps & DispatchProps, ICategoriesContainerState> {
  SetCostsToCategories = (categories: string[], items: CostItemType[]): categoriesWithCosts[] => {
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
    const categoriesWithCosts = this.SetCostsToCategories(this.props.categories.map(x => x.name), this.props.items)

    return (
      <div className={classes.Categories}>
        <div className={classes.CategoriesHeader}>Категории</div>
        <CategoriesAdd/>
        {
          categoriesWithCosts.map((categoryWithCosts: categoriesWithCosts, index: number) => {
            const WithBoxStyleHoc = withBoxStyle(CategoriesList)
            return <WithBoxStyleHoc key={index} category={categoryWithCosts.category} costs={categoryWithCosts.costs} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps (state: storeValuesType): ICategoriesProps {
  return {
    categories: state.categories,
    items: state.costItems
  }
}

interface DispatchProps {
  addCategory: typeof addCategoryActionCreator
}

function mapDispatchToProps (dispatch: Dispatch): DispatchProps {
  return {
    addCategory: (item: string) => {
      return dispatch(addCategoryActionCreator(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
