import { combineReducers } from 'redux';
import AppReducer from './redux.reducers';

export default combineReducers({
    app: AppReducer
});