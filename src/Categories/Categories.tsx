import React from 'react'
import classes from './Categories.module.css'

export interface ICategoriesProps {
  categories: string[]
}

class Categories extends React.Component<ICategoriesProps> {
  shouldComponentUpdate (nextProps: Readonly<ICategoriesProps>, nextState: Readonly<unknown>, nextContext: any): boolean {
    return false
  }

  render (): JSX.Element {
    return (
    <div className={classes.Categories}>
        <div>Категории</div>
        <ol>
          {
            this.props.categories.map((category: string, index: number) => {
              return (
              <li key={index}>{category}</li>
              )
            })
        }
        </ol>
      </div>
    )
  }
}

export default Categories
