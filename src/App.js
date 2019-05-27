import React, {Component} from 'react';
import {connect} from 'react-redux';
import Routes from "./Routes"
import { fetchTitles } from './actions';

class App extends Component {


  componentDidMount() {
    this.props.fetchTitles();
  }


  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchTitles: () => dispatch(fetchTitles())
  }
}

export default connect(null, mapDispatchToProps)(App);
