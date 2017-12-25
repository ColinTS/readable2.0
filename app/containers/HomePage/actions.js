import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
} from './constants'

export function LoadCategoriesAction() {
  return {
    type: LOAD_CATEGORIES
  }
}

export function LoadCategoriesSuccessAction(categories) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    categories
  }
}