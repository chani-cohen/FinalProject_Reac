import {
    ADD_ITEM,
} from '../actions/index'

function manageList(state = {items: []}, action) {
    switch (action.type) {
    case ADD_ITEM:
        {
            debugger;
            return {items: [...state.items, action.payload]};
            // return { items: [...state.items, action.payload] };
            // { list: { items: ["clothes"] } 
        }
    default:
        return state
    }
}
export default manageList;