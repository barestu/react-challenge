import React, { Component } from 'react'
import News from './News'
import Typography from 'material-ui/Typography'
import '../style.css'

class NewsList extends Component {
  render() {
    return (
      <div className="NewsList">
        <Typography className="page-title" variant="display3" align="center">Popular Today</Typography>
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