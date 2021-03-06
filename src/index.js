import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import store from './Redux/store'
import * as serviceWorker from './serviceWorker';
//all this below can be ONE import i think 
import { getLocations } from './Redux/actions/locations.actions';


const newStore = store();
newStore.dispatch(getLocations());

ReactDOM.render(

    <Provider store={newStore} >
        <App />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
