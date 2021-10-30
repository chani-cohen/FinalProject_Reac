import {
   // GET_ALL_STREETS,
    SET_STREETS,
} from '../actions/index'

function manageStreet(state = { streetsList: [] }, action) {
    // debugger;
    switch (action.type) {
        
        case SET_STREETS: return { streetsList: [...state.streetsList = action.payload] }
        default:
            return state
    }
}
export default manageStreet;