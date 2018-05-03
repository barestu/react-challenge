import React, { Component } from 'react';
import { Paper } from 'material-ui';
import Typography from 'material-ui/Typography';

class Error404 extends Component {
  render() {
    return (
      <div className="error404">
        <Paper className="content" align="center">
          <Typography className="page-title" variant="display3" align="center">
            Error 404: Page not found!
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Error404;