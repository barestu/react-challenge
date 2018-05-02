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
import { Tab } from 'material-ui/Tabs'
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
            <div>
              {
                this.state.categories.map(category => 
                  <Link to={`/${category}`} key={`cat-${category}`}>
                    <Tab label={category} />
                  </Link>
                )
              }
            </div>
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
