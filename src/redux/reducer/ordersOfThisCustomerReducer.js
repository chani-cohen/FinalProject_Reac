import {
    SET_ORDERS_OF_THIS_CUSTOMER,
} from '../actions/index'

function manageOrderOfThisCustomer(state = { ordersOfThisCustomer_List: [] }, action) {
    debugger;
    switch (action.type) {
        
        case SET_ORDERS_OF_THIS_CUSTOMER: return { ordersOfThisCustomer_List: [...state.ordersOfThisCustomer_List = action.payload] }
        default:
            return state
    }
}
export default manageOrderOfThisCustomer;