import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './views/Home'
import NewsByCategory from './components/NewsByCategory.jsx'
import About from './views/About'
import Error404 from './views/Error404'
import './style.css'
import Grid from 'material-ui/Grid'
import Register from './views/Register';

window.$user = axios.create({
  baseURL: 'http://35.187.249.89/api/user'
})

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
                <Route path="/register" component={Register} />
                <Route path="*" component={Error404} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
