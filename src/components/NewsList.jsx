import React, { Component } from 'react'
import News from './News'
import '../style.css'

class NewsList extends Component {
  render() {
    return (
      <div className="NewsList">
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