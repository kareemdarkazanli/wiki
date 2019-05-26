import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {


  componentDidMount() {

    axios({
      method: 'get',
      url: 'https://64hh6p28u2.execute-api.us-east-1.amazonaws.com/dev/articles'
    }).then((resp) => {
      console.log("RESPONSE", resp);
    }).catch((err) => {
      console.log("ERROR", err);
    })

  }

  render() {

    return (
      <div>Home</div>
    )
  }
}

export default Home;
