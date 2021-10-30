import {
     SET_NEIGHBORHOODS,
 } from '../actions/index'
 
 function manageNeighborhood(state = { neighborhoodsList: [] }, action) {
     debugger;
     switch (action.type) {
         
         case SET_NEIGHBORHOODS: return { neighborhoodsList: [...state.neighborhoodsList = action.payload] }
         default:
             return state
     }
 }
 export default manageNeighborhood;