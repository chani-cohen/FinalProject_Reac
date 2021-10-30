import {
    SET_STATIONS,
} from '../actions/index'

function manageStations(state = { stationsList: [] }, action) {
    switch (action.type) {
        case SET_STATIONS: return { stationsList: [...state.stationsList = action.payload] }
        default:
            return state;
    }
}
export default manageStations;