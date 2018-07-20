import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './rootReducer'

const initialState = {}

export const history = createBrowserHistory()

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
)
