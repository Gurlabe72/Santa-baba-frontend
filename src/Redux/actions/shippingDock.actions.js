export const getShippingDocks = () => {
    return async dispatch => {
        try {
            let response = await fetch('http://localhost:3333/shippingDock')
            let shippingDocks = await response.json()
            dispatch({
                type: 'GET_SHIPPINGDOCKS_SUCCESS',
                payload: shippingDocks,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

