const initialState = {
    onTheRoads: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ONTHEROADS_SUCCESS':
            return {
                ...state,
                onTheRoads: action.payload
            }
        default:
            return state;
    }
}

