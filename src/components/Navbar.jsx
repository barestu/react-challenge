import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { Tab } from 'material-ui/Tabs'
import { Divider, Button } from 'material-ui'

class Navbar extends Component {
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
      <div className="navbar">
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
                <Link className="link"  to={`/category/${category}`} key={`cat-${category}`}>
                  <Tab label={category} />
                </Link>
              )
            }
          </div>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;