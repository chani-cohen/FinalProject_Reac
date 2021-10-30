import {
    //ADD_TICKET,
    SET_TICKETS,
} from '../actions/index'

function manageTickets(state = { ticketsList: [] }, action) {
    switch (action.type) {
        // case ADD_TICKET:
      
        //     }
        case SET_TICKETS: return { ticketsList: [...state.ticketsList = action.payload] }
        default:
            return state
    }
}
export default manageTickets;