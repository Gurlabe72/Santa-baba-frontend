const initialState = {
    toggleButton: false,
    user: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON_ACTION':
            return {
                ...state,
                toggleButton: !state.toggleButton,
                user: action.payload
            }
        default:
            return state;
    }
}