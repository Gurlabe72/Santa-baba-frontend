export const getTruckStops = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3333/truckStop')
            let truckStops = await response.json()
            dispatch({
                type: 'GET_TRUCKSTOPS_SUCCESS',
                payload: truckStops,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

