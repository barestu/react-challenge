import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              ReactChallenge.
            </Typography>
          </Toolbar>
        </AppBar>
        <h1>
          Hello
        </h1>
      </div>
    );
  }
}

export default App;
