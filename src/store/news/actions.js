import {
  FETCH_ALL_NEWS,
  FETCH_NEWS_BY_CATEGORY
} from './action.type'

export const allNews = (allNews) => ({
  type: FETCH_ALL_NEWS,
  payload: allNews
})

export const newsByCategory = (newsByCategory) => ({
  type: FETCH_NEWS_BY_CATEGORY,
  payload: newsByCategory
})