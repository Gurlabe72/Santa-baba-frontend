import { combineReducers } from 'redux';
import AppReducer from './reducers/locations.reducers';

export default combineReducers({
    app: AppReducer
});