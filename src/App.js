import React, { Component } from 'react'
import axios from 'axios'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'

import NewsList from './components/NewsList'
import { Divider } from 'material-ui';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      categories: [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology'
      ]
    }
  }

  fetchNews() {
    axios.get('https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=5eb211a68ad044a98036cedae105d12a')
      .then(response => {
        let result = response.data.articles
        this.setState({ data: result })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchNews()
    this.interval = setInterval(() => this.fetchNews(), 60 * 1000)
  }

  render() {
    let style = {
      contentMargin: {
        margin: 0,
        padding: 10
      }
    }

    return (
      <div className="App">
        <AppBar color="secondary" position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              Beritaku
            </Typography>
          </Toolbar>
          <Divider />
          <Tabs>
            {
              this.state.categories.map(category => 
                <Tab label={category} />
              )
            }
          </Tabs>
        </AppBar>

        <Grid container justify="center" style={style.contentMargin}>
          <Grid item xs={9}>
            <Paper style={style.contentMargin}>
              <NewsList data={this.state.data} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
