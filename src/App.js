import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import NewsByCategory from './components/NewsByCategory.jsx'

import './style.css'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Tabs, { Tab } from 'material-ui/Tabs'
import { Divider, Button } from 'material-ui'

class App extends Component {
  constructor() {
    super()
    this.state = {
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

  // fetchNewsByCategory() {
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=5eb211a68ad044a98036cedae105d12a`)
  //     .then(response => {
  //       let result = response.data.articles
  //       this.setState({ data: result })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <AppBar color="secondary" position="static">
            <Toolbar>
              <Typography className="brand" variant="headline" color="inherit">
                BeritaKu
              </Typography>
              <Link to="/" className="nav">
                <Button variant="raised" color="inherit">Home</Button>
              </Link>
              <Link to="/about" className="nav">
                <Button variant="raised" color="inherit">About</Button>
              </Link>
              <div className="nav">
                <Button variant="raised" color="primary">Login</Button>
              </div>
            </Toolbar>
            <Divider />
            <Tabs>
              <Tab label="All News" />
              {
                this.state.categories.map(category => 
                  <Link to={`/${category}`}>
                    <Tab label={category} key={category} />
                  </Link>
                )
              }
            </Tabs>
          </AppBar>

          <Grid container className="content" justify="center">
            <Grid item xs={9}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/:category" component={NewsByCategory} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
