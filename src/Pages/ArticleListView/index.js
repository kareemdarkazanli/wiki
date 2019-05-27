import React, { Component } from 'react';
import ArticleThumbnail from './ArticleThumbnail';
import apis from '../../APIs';
import './../Pages.less';

class ArticleListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }


  componentDidMount() {

    apis.find({}).then((resp) => {

      this.setState({
        articles: resp.data
      })

    }).catch((err) => {
      console.log("ERROR", err);
    })

  }

  render() {

    const {articles=[]} = this.state;

    return (
      <div>
      {
        articles.map((article, index) => {
          const {title="", thumbnail={}} = article;
          return <ArticleThumbnail key={index} title={title} thumbnail={thumbnail} />
        })
      }
      </div>
    )
  }
}

export default ArticleListView;
