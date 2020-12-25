const initialState = {
    name: null,
    show: false,
}

function UserReducer(state=initialState, action) {
    switch (action.type) {
        case "MODAL_SHOW":
            return {
                ...state,
                name: action.payload.name,
                show: action.payload.show
            }
        default:
            return state;
    }
}

export default UserReducer;