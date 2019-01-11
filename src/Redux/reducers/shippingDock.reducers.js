const initialState = {
    shippingDocks: [],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SHIPPINGDOCKS_SUCCESS':
            return {
                ...state,
                shippingDocks: action.payload
            }
        default:
            return state;
    }
}

