import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import './App.css';

import { Container } from 'semantic-ui-react';

import Navbar from './component/Navbar.jsx';
import Locations from './component/Locations';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Navbar />
          <Route exact path='/' component={() => < Redirect to='/locations' />} />
          <Route path='/locations' component={Locations} />



        </ Container>
      </Router>
    );
  }
}

export default App;
