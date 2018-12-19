import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleButtonAction } from './Redux/redux.actions';
import './App.css';

import { Grid, Header, Image, Container } from 'semantic-ui-react';

import Navbar from './component/Navbar.jsx';

import NaughtyList from './component/NaughtyList.jsx';
import NiceList from './component/NiceList.jsx';
class App extends Component {
  render() {
    const { toggleButtonAction } = this.props;
    return (
      <Container className="App">
        <h1> SantaBaba</h1>
        <Navbar />
        {/* <Image fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyar7sCU9FonoYYLBw_CILNam_qxXI5DXbMB8nRtiwHZ3EckWV"  /> */}
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
          <p>{toggleButtonAction ? 'I am set to True' : 'I am set to false'} </p>
        </Grid>
      </ Container>
    );
  }
}

const mapStatetoProps = (state) => ({
  ...state.app
})

export default connect(mapStatetoProps, { toggleButtonAction }
)(App);
