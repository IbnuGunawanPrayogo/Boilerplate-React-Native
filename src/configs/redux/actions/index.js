export const Increment = (data) => (dispatch) => {
    return dispatch({type: 'INCREMENT', value: data})
}

export const Decrement = (data) => (dispatch) => {
    if(data <= 0){
        return alert('value nol')
    } else {
        return dispatch({type: 'DECREMENT', value: data})
    }
}