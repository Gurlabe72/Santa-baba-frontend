import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
// import { connect } from 'react-redux';
import './App.css';

import { Container } from 'semantic-ui-react';

import Navbar from './component/Navbar.jsx';
import OnTheRoad from './component/OnTheRoad';
import Locations from './component/Locations';
import TruckStops from './component/TruckStops';
import ShippingDocks from './component/ShippingDock';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Navbar />
          <Route path='/onTheRoads' component={OnTheRoad} />
          <Route path='/locations' component={Locations} />
          <Route path='/truckStops' component={TruckStops} />
          <Route path='/shippingDocks' component={ShippingDocks} />


        </ Container>
      </Router>
    );
  }
}

export default App;
