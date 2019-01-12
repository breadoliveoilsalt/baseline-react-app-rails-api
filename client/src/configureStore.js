import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
// Might need something like this if Heroku gives you problems in the future:
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'

import rootReducer from './reducers/rootReducer'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
