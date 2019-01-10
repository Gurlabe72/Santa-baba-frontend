export const getOnTheRoads = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3000/onTheRoad')
            let onTheRoads = await response.json()
            dispatch({
                type: 'GET_ONTHEROADS_SUCCESS',
                payload: onTheRoads,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

