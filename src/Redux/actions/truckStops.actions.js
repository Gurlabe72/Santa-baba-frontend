export const getTruckStops = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3000/truckStop')
            let truckStop = await response.json()
            dispatch({
                type: 'GET_TRUCKSTOPS_SUCCESS',
                payload: truckStop,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

