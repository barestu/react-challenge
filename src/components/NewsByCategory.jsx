import React, { Component } from 'react'
import store from '../store'
import axios from 'axios'
import NewsList from './NewsList'
import Paper from 'material-ui/Paper'

class NewsByCategory extends Component {
  constructor() {
    super()
    this.state = {
      news: store.getState()
    }

    this.unsubscribe = store.subscribe(() => {
      const getNewsByCategory = store.getState()
      this.setState({
        news: getNewsByCategory
      })
    })
  }

  fetchNewsByCategory(category) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=5eb211a68ad044a98036cedae105d12a`)
      .then(response => {
        let result = response.data.articles
        store.dispatch({
          type: 'FETCH_NEWS_BY_CATEGORY',
          payload: result
        })
      })
      .catch(err => console.log(err))
  }

  componentWillReceiveProps(props) {
    let category = props.match.params.category 
    this.fetchNewsByCategory(category)
  }

  componentDidMount() {
    let category = this.props.match.params.category
    this.fetchNewsByCategory(category)
    this.interval = setInterval(() => 
      this.fetchNewsByCategory(), 60 * 1000
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <Paper className="content" align="center">
          <NewsList data={this.state.news}
          category={this.props.match.params.category} />
        </Paper>
      </div>
    );
  }
}

export default NewsByCategory;