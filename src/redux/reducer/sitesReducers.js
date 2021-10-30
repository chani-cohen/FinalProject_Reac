import {
    //ADD_SITE,
    SET_SITES,
} from '../actions/index'

function manageSites(state = { sitesList: [] }, action) {
    switch (action.type) {
        // case ADD_SITE:
     
        //     }
        case SET_SITES: return { sitesList: [...state.sitesList = action.payload] }
        default:
            return state
    }
}
export default manageSites;