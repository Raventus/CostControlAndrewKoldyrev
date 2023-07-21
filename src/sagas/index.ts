import { takeEvery, select } from '@redux-saga/core/effects'
import { STORE_SAVE_STORE, STORE_GET_STORE } from '../redux/actions/actionTypes'

export function * getWorkerSaga (): Generator {
  const storeToGet = select((state) => state)
  console.log(storeToGet)
  yield
}

export function * setWorkerSaga (): Generator {
  const storeToSave = select((state) => state)
  console.log(storeToSave)
  yield
}

export function * watchClickSaga (): Generator {
  yield takeEvery(STORE_GET_STORE, getWorkerSaga)
  yield takeEvery(STORE_SAVE_STORE, setWorkerSaga)
}

export default function * rootSaga (): Generator {
  yield watchClickSaga()
}
