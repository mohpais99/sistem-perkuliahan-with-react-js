const initialState = {
    id: '',
    title: '',
    status: false,
    component: null
}

function UserReducer(state=initialState, action) {
    switch (action.type) {
        case "MODAL_SHOW":
            const {id, title, show, component} = action.payload
            return {
                ...state,
                id: id,
                title: title,
                status: show,
                component: component
            }
        case "MODAL_CLOSE":
            return {
                id: '',
                title: '',
                status: false,
                component: null
            }
        default:
            return state;
    }
}

export default UserReducer;