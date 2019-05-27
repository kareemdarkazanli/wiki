import React, { Component } from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';
import LinkifyContent from './LinkifyContent';
import apis from '../../APIs';
import './../Pages.less';

class Article extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: {}
    }
  }

  componentDidUpdate(prevProps) {
    const {match:prevMatch={}} = prevProps;
    const {params:prevParams={}} = prevMatch;
    const {pathParam:prevPathParam=""} = prevParams;

    const {match={}, history} = this.props;
    const {params={}} = match;
    const {pathParam=""} = params;

    console.log(prevPathParam, pathParam, this.props)
    if(prevPathParam !== pathParam) {
      apis.find({title: pathParam.toLowerCase()}).then((resp) => {


        console.log('Article', resp.data);
        if(!resp.data) {
          this.props.history.push("/")
        }
        else {
          this.setState({
            article: resp.data
          })
        }

      }).catch((err) => {
        console.log("ERROR", err);
      })
    }
  }

  componentDidMount() {
    const {match={}, history} = this.props;
    const {params={}} = match;
    const {pathParam=""} = params;

    apis.find({title: pathParam.toLowerCase()}).then((resp) => {


      console.log('Article', resp.data);
      if(!resp.data) {
        history.push("/")
      }
      else {
        this.setState({
          article: resp.data
        })
      }

    }).catch((err) => {
      console.log("ERROR", err);
    })

  }

  render() {

    const {article={}} = this.state;
    const {title="", thumbnail="", content=""} = article;
    return (
      <div>
      {
        Object.keys(article).length ? (
          <div className="article">
            <Link to="/">Home</Link>
            <img src={thumbnail.src} alt={thumbnail.alt} title={thumbnail.title} />
            <p>{title}</p>
            <p><LinkifyContent map={{bee: 1, queen: 1}} content={content}/></p>
          </div>
        ) : null
      }
      </div>
    )
  }
}

export default Article;
