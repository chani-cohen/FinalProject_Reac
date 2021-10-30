import {
    SET_USER,
    GET_USER,
} from '../actions/index'

function manageUser(state = { user: {} }, action) {
    debugger;
    switch (action.type) {
        
        case SET_USER: return { user: {...state.user = action.payload} }
        // case GET_USER: return {}
        default:
            return state
    }
}
export default manageUser;