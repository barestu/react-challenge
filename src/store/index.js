import { createStore, combineReducers } from 'redux'
import newsReducer from './news/reducers'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  newsReducer
})

const store = createStore(
  reducers,
  reduxDevtools
)

export default store