import { combineReducers } from 'redux';
import AppReducer from  '../Redux/redux.reducers';

export default combineReducers({
    app: AppReducer
});