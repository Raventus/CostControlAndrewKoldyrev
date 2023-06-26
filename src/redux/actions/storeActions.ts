import { type Dispatch } from 'redux'
import { STORE_GET_STORE, STORE_SAVE_STORE } from './actionTypes'

export interface StoreAction {
  type: string
}

export function saveStoreActions (): StoreAction {
  return {
    type: STORE_SAVE_STORE
  }
}

export function getStoreActions (): StoreAction {
  return {
    type: STORE_GET_STORE
  }
}

export function saveStoreToLocalStorage () {
  return async (dispatch: Dispatch<StoreAction>): Promise<void> => {
    try {
      dispatch(saveStoreActions())
    } catch (error) {
      console.log(error)
    }
  }
}

export function getStoreToLocalStorage () {
  return async (dispatch: Dispatch<StoreAction>): Promise<void> => {
    try {
      dispatch(getStoreActions())
    } catch (error) {
      console.log(error)
    }
  }
}
