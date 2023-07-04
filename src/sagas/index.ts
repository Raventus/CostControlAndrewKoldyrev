import { takeEvery } from '@redux-saga/core/effects'
import { STORE_SAVE_STORE, STORE_GET_STORE } from '../redux/actions/actionTypes'

export function * getWorkerSaga (): Generator {
  console.log('store is extract')
  yield
}

export function * setWorkerSaga (): Generator {
  console.log('store is saved')
  yield
}

export function * watchClickSaga (): Generator {
  yield takeEvery(STORE_GET_STORE, getWorkerSaga)
  yield takeEvery(STORE_SAVE_STORE, setWorkerSaga)
}

export default function * rootSaga (): Generator {
  yield watchClickSaga()
}
