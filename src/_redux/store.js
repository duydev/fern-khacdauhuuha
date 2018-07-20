import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'

const initialState = {}

export const history = createBrowserHistory()

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
)
