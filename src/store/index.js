import { createStore } from 'redux'

let allNews = []

const reducer = (state = allNews, action) => {
  switch (action.type) {
    case 'FETCH_ALL_NEWS':
      return action.payload
    case 'FETCH_NEWS_BY_CATEGORY':
      return action.payload
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store