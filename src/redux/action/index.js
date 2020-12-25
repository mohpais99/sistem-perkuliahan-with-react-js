export const setModal = (payload) => {
    return (dispatch) => {
        const data = {
            name: payload,
            show: true
        }
        return dispatch({type: "MODAL_SHOW", payload: data})
    }
}

