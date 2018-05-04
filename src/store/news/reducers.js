const initialState = {
  news: []
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_NEWS':
      return {...state, news: action.payload.allNews}
    case 'FETCH_NEWS_BY_CATEGORY':
      return action.payload
    default:
      return state
  }
}

export default newsReducer