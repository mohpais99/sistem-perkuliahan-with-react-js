export const setModal = (payload) => {
    return (dispatch) => {
        const data = {
            id: payload.id,
            title: payload.title,
            status: payload.show
        }
        return dispatch({type: "MODAL_SHOW", payload: data})
    }
}

