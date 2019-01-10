export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TRUCKSTOPS_SUCCESS':
            return {
                ...state,
                getTruckStops: action.payload
            }
        default:
            return state;
    }
}
