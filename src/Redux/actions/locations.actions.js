export const getLocations = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3333/locations')
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

export const createLocations = (payload) => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3333/locations', { method: 'post', body: JSON.stringify(payload), headers: { 'content-type': 'application/json' } })
            let locations = await response.json()
            dispatch({
                type: 'CREATE_LOCATIONS_SUCCESS',
                payload: locations
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}



