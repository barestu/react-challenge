import React, { Component } from 'react';
import { Paper, Typography } from 'material-ui';

class About extends Component {
  render() {
    return (
      <div>
        <Paper className="content">
          <Typography className="page-title" variant="display3" align="center">About BeritaKu</Typography>
          <Typography variant="body2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim mauris. In et nunc nisl. Aliquam gravida pretium arcu, non interdum ante sollicitudin vitae. Maecenas turpis libero, tincidunt vitae accumsan at, tempor convallis elit. In non lobortis ligula. Morbi vitae varius nibh. In nec euismod eros. Integer accumsan pretium venenatis. Fusce purus ante, feugiat vitae feugiat vitae, pellentesque at massa. Vivamus sed lacinia tortor. Etiam et sapien fringilla, congue dolor vel, pulvinar eros. Nunc tempus risus ut quam dictum tempor.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim mauris. In et nunc nisl. Aliquam gravida pretium arcu, non interdum ante sollicitudin vitae. Maecenas turpis libero, tincidunt vitae accumsan at, tempor convallis elit. In non lobortis ligula. Morbi vitae varius nibh. In nec euismod eros. Integer accumsan pretium venenatis. Fusce purus ante, feugiat vitae feugiat vitae, pellentesque at massa. Vivamus sed lacinia tortor. Etiam et sapien fringilla, congue dolor vel, pulvinar eros. Nunc tempus risus ut quam dictum tempor.
            </p>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default About;