import React, { Component } from 'react'
import News from './News'
import Typography from 'material-ui/Typography'

class NewsList extends Component {
  render() {
    return (
      <div className="NewsList">
        <Typography variant="display3" align="center" style={{margin: '20px'}}>Popular Today</Typography>
        {
          this.props.data.map(news => 
            <News news={news} key={news.url} />
          )
        }
      </div>
    );
  }
}

export default NewsList;