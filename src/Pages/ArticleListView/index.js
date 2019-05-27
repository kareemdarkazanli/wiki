import React, { Component } from 'react';
import ArticleThumbnail from './ArticleThumbnail';
import APIs from '../../APIs';
import './../Pages.less';

class ArticleListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }


  componentDidMount() {

    APIs.find({}).then((resp) => {

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
      <div className="article-list-view">
      <ul>
      {
        articles.map((article, index) => {
          const {title="", thumbnail={}} = article;
          return <ArticleThumbnail key={index} title={title} thumbnail={thumbnail} />
        })
      }
      </ul>
      </div>
    )
  }
}

export default ArticleListView;
