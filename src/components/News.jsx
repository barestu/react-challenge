import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { Button } from 'material-ui';

class News extends Component {
  
  render() {
    let style = {
      paddingNews: {
        padding: '5px 10px'
      },
      imgSize: {
        width: '450px'
      }
    }

    let {
      author,
      description,
      publishedAt,
      title,
      url,
      urlToImage
    } = this.props.news

    let noImage = 'No image'

    return (
      <div className="News" style={style.paddingNews}>
        <Typography variant="headline" gutterBottom>
          {title}
        </Typography>
        <img src={urlToImage} alt={noImage} style={style.imgSize}/>
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