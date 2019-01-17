import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import './App.css';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import { Container } from 'semantic-ui-react';
import Navbar from './component/Navbar.jsx';
import Locations from './component/Locations';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Navbar />
          <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
              name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {/* <h1>{this.state.selectedPlace.name}</h1> */}
              </div>
            </InfoWindow>
          </Map>

          <Route exact path='/' component={() => < Redirect to='/locations' />} />
          <Route path='/locations' component={Locations} />
        </ Container>
      </Router>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBKnukkbaHJMsVGXd0iFjP5OMQSo-EPy_M')
})(App)