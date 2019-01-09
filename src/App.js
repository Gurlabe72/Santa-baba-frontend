import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleButtonAction } from './Redux/redux.actions';
import './App.css';

import { Grid, Header, Image, Container } from 'semantic-ui-react';

import Navbar from './component/Navbar.jsx';

class App extends Component {
  render() {
    const { toggleButtonAction } = this.props;
    return (
      <Container className="App">
        <h1> Trucker</h1>
        <Navbar />
        <p>{toggleButtonAction ? 'I am set to True' : 'I am set to false'} </p>
      </ Container>
    );
  }
}

const mapStatetoProps = (state) => ({
  ...state.app
})

export default connect(mapStatetoProps, { toggleButtonAction }
)(App);
