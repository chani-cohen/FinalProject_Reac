import { combineReducers } from 'redux';
import list from './listReducers';
import travelReducer from './travelsReducers';
import siteReducer from './sitesReducers';
import ticketReducer from './ticketsReducers';
import userReducer  from './userReducer';
import streetReducer from './streetsReducer';
import orderReducer  from './ordersReducer';
import orderOfThisCustomerReducer  from './ordersOfThisCustomerReducer';
import stationReducer  from './stationsReducer';
import neighborhoodReducer  from './neighborhoodsReducer';

export default combineReducers({
 list,
 travelReducer,
 siteReducer,
 ticketReducer,
 //!!
 userReducer,
 streetReducer,
 orderReducer,
 orderOfThisCustomerReducer,
 stationReducer,
 neighborhoodReducer,
})