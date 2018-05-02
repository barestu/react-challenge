import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { Button } from 'material-ui'
import '../style.css'

class News extends Component {
  
  render() {
    let {
      author,
      description,
      publishedAt,
      title,
      url,
      urlToImage
    } = this.props.news

    return (
      <div className="News">
        <Typography variant="headline" gutterBottom>
          {title}
        </Typography>
        <img className="img" src={urlToImage} alt="" />
        <div>
          <small>{publishedAt} </small>
          <small>{author}</small>
        </div>
        <p>{description}</p>
        <Button variant="raised" color="secondary" href={url}>
          Selengkapnya
        </Button>
        <Divider style={{margin: '15px'}} />
      </div>
    );
  }
}

export default News;