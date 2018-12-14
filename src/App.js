import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleButtonAction } from '../Redux/redux.actions';














































import './App.css';
import { Grid, Divider, Header, Image } from 'semantic-ui-react';

import Navbar from './component/Navbar.jsx';

import NaughtyList from './component/NaughtyList.jsx';
import NiceList from './component/NiceList.jsx';
class App extends Component {
  state = {
    email: 'e',
    name: 'n'
  }
  render() {
    return (
      <div className="App">
<h1> SantaBaba</h1>
<Navbar />
<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyar7sCU9FonoYYLBw_CILNam_qxXI5DXbMB8nRtiwHZ3EckWV" className="App-logo" alt="logo" />
        <Header as='h2' icon testAlign='center'>
      
          </Header> 
        <Grid>
          <Grid.Row>
          <Grid.Column width={6}>
              <NaughtyList />
          </Grid.Column>
          
          <Grid.Column width={6}>
              <NiceList />
          </Grid.Column>    
          </Grid.Row>
        <Divider vertical>Gauge Here</Divider>
        </Grid>
      </div>
    );
  }
}

export default App;
