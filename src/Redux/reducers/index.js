import { combineReducers } from 'redux';
import locationReducer from './locations.reducers';


const rootReducer = combineReducers({
    locations: locationReducer,


});
export default rootReducer; 