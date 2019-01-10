export const getLocations = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3000/location')
            let locations = await response.json()
            dispatch({
                type: 'GET_LOCATIONS_SUCCESS',
                payload: locations,

            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

