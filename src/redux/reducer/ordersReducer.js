import {
    SET_ORDERS,
    //GET_ALL_ORDERS,
} from '../actions/index'

function manageOrder(state = { ordersList: [] }, action) {
    debugger;
    switch (action.type) {
        
        case SET_ORDERS: return { ordersList: [...state.ordersList = action.payload] }
        default:
            return state
    }
}
export default manageOrder;