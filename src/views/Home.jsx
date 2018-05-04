import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { allNews } from '../store/news/actions'
import axios from 'axios'
import NewsList from '../components/NewsList'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

class Home extends Component {
  fetchAllNews() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=5eb211a68ad044a98036cedae105d12a`)
      .then(response => {
        let result = response.data.articles
        this.props.allNews(result)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchAllNews()
    this.interval = setInterval(() => this.fetchAllNews(), 60 * 1000)
  }

  render() {
    return (
      <div className="home">
        <Paper className="content" align="center">
          <Typography className="page-title" variant="display3" align="center">Popular Today</Typography>
          <NewsList data={this.props.newsList} />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  newsList: state.newsReducer.news
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  allNews
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)