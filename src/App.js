import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Navbar from './components/Navbar'
import NewsByCategory from './components/NewsByCategory.jsx'

import './style.css'
import Grid from 'material-ui/Grid'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Grid container className="content" justify="center">
            <Grid item xs={9}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/category/:category" component={NewsByCategory} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
