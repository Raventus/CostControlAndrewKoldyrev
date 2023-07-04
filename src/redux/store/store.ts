/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk, sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

export default store
