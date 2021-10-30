import {
    ADD_TRAVEL,
    SET_TRAVELS,
} from '../actions/index'

function manageTravels(state = { travelsList: [] }, action) {
    switch (action.type) {
        case ADD_TRAVEL:
            {
                // // debugger;
                return { travelsList: [...state.travelsList, action.payload] };

                // /*
                //     const store = createStore(rootReducer, { 
                //     list: { items: ["clothes"] },
                //     travelsList: []
                //     },
                // */
            }
        case SET_TRAVELS: return { travelsList: [...state.travelsList = action.payload] }
        default:
            return state
    }
}
export default manageTravels;