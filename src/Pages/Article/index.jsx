import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import LinkifyContent from './LinkifyContent';
import APIs from '../../APIs';
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

    if(prevPathParam !== pathParam) {
      APIs.find({title: pathParam.toLowerCase()}).then((resp) => {

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
  }

  componentDidMount() {
    const {match={}, history} = this.props;
    const {params={}} = match;
    const {pathParam=""} = params;

    APIs.find({title: pathParam.toLowerCase()}).then((resp) => {


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
    const {titles:prevTitles={}} = this.props;

    const {title="", thumbnail="", content=""} = article;
    return (
      <div>
      {
        Object.keys(article).length ? (
          <div className="article">
            <img src={thumbnail.src} alt={thumbnail.alt} title={thumbnail.title} />
            <Link className="home-link" to="/">Back to home</Link>
            <h1>{title[0].toUpperCase() + title.substring(1)}</h1>
            <p><LinkifyContent map={prevTitles} content={content}/></p>
          </div>
        ) : null
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    titles: state.titles
  }
}

export default connect(mapStateToProps)(Article);
