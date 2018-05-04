import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Divider,
  Popover,
  Button
} from 'material-ui'
import LoginForm from './LoginForm';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null,
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

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { anchorEl } = this.state

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
            <Link to="/protected" className="nav">
              <Button variant="raised" color="inherit">Protected</Button>
            </Link>
            <div className="nav">
              <Button
                onClick={this.handleClick}
                variant="raised"
                color="primary"
              >Login</Button>
              <Popover
                className="login"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <LoginForm />
              </Popover>
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