import { CATEGORIES_ADD, CATEGORIES_DELETE } from './actionTypes'

export interface AddCategoryAction {
  type: string
  category: string
}

export interface DeleteCategoryAction {
  type: string
  id: number
}
export function addCategoryActionCreator (category: string): AddCategoryAction {
  return {
    type: CATEGORIES_ADD,
    category
  }
}

export function deleteCategoryActionCreator (id: number): DeleteCategoryAction {
  return {
    type: CATEGORIES_DELETE,
    id
  }
}
