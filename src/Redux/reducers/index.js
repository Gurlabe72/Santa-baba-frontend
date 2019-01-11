import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import locationReducer from './locations.reducers';
import onTheroadReducer from './onTheRoad.reducers';
import shippingDocksReducer from './shippingDock.reducers';
import truckStopsReducer from './truckStops.reducers';


const rootReducer = combineReducers({
    form: formReducer,
    locations: locationReducer,
    onTheRoad: onTheroadReducer,
    shippingDocks: shippingDocksReducer,
    truckStops: truckStopsReducer

});
export default rootReducer; 