import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import ReduxThunk from 'redux-thunk';


import { getSitesMiddleWare } from '../redux/middleware/site.crud';
import { getTravelsMiddleWare } from '../redux/middleware/travel.crud';
import { getTicketsMiddleWare } from '../redux/middleware/ticket.crud';
//!!
import { getUserMiddleWare } from '../redux/middleware/user.crud';
import { getStreetsMiddleWare } from '../redux/middleware/street.crud';
import { getOrdersMiddleWare } from '../redux/middleware/order.crud';
import { getOrdersOfCustomerMiddleWare } from '../redux/middleware/orderOfThisCustomer.crud';
import { getStationsMiddleWare } from '../redux/middleware/station.crud';
import { getNeighborhoodsMiddleWare } from '../redux/middleware/neighborhood.crud';
import { composeWithDevTools } from 'redux-devtools-extension';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  
const store = createStore(rootReducer, { 
    list: {items: ["clothes"]},
    travelReducer: ["t1"],
    siteReducer: [],
    ticketReducer: [],
    //!!
    userReducer: {},
    streetReducer: [],
    orderReducer: [], 
    orderOfThisCustomerReducer: [],
    stationReducer: [],
    neighborhoodReducer: [],
    },
    //!!
    composeWithDevTools(applyMiddleware(ReduxThunk,getTravelsMiddleWare, getSitesMiddleWare, getTicketsMiddleWare, getUserMiddleWare, getStreetsMiddleWare, getOrdersMiddleWare, getOrdersOfCustomerMiddleWare, getStationsMiddleWare, getNeighborhoodsMiddleWare)));
  
export default store;