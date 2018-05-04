import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newsByCategory } from '../store/news/actions'
import axios from 'axios'
import NewsList from './NewsList'
import Paper from 'material-ui/Paper'

class NewsByCategory extends Component {
  fetchNewsByCategory(category) {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=5eb211a68ad044a98036cedae105d12a`)
      .then(response => {
        let result = response.data.articles
        this.props.newsByCategory(result)
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

  render() {
    return (
      <div>
        <Paper className="content" align="center">
          <NewsList data={this.props.newsList}
          category={this.props.match.params.category} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newsList: state.news
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  newsByCategory
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsByCategory);