const initialState = {
    id: '',
    title: '',
    status: false,
}

function UserReducer(state=initialState, action) {
    switch (action.type) {
        case "MODAL_SHOW":
            const {id, title, show} = action.payload
            return {
                ...state,
                id: id,
                title: title,
                status: show
            }
        default:
            return state;
    }
}

export default UserReducer;