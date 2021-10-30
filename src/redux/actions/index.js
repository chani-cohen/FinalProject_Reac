/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'
export const ADD_TRAVEL = 'ADD_TRAVEL'
export const GET_ALL_TRAVELS = 'GET_ALL_TRAVELS'
export const SET_TRAVELS = 'SET_TRAVELS'

/* Sites */
export const ADD_SITE= 'ADD_SITE'
export const SET_SITES= 'SET_SITES'
export const GET_ALL_SITES= 'GET_ALL_SITES'


/* Tickets */
export const ADD_TICKET= 'ADD_TICKET'
export const SET_TICKETS= 'SET_TICKETS'

export const GET_ALL_TICKETS= 'GET_ALL_TICKETS'


/* Streets */
export const GET_ALL_STREETS= 'GET_ALL_STREETS'
export const SET_STREETS= 'SET_STREETS'


/* Orders */
export const GET_ALL_ORDERS= 'GET_ALL_ORDERS'
export const SET_ORDERS= 'SET_ORDERS'

//הוספת הזמנה ללקוח מסוים!!
export const ADD_ORDER='ADD_ORDER';

//Order of this customer
export const GET_ALL_ORDERS_OF_THIS_CUSTOMER='GET_ALL_ORDERS_OF_THIS_CUSTOMER';
export const SET_ORDERS_OF_THIS_CUSTOMER='SET_ORDERS_OF_THIS_CUSTOMER';


/* Neighborhood */
export const GET_ALL_NEIGHBORHOODS= 'GET_ALL_NEIGHBORHOODS'
export const SET_NEIGHBORHOODS= 'SET_NEIGHBORHOODS'


//User
export const SET_USER= 'SET_USER'
export const GET_USER= 'GET_USER'


//Stations
export const GET_ALL_STATIONS= 'GET_ALL_STATIONS'
export const SET_STATIONS= 'SET_STATIONS'




/*
* action creators
*/
export function addItem(text) {
    return { type: ADD_ITEM, payload: text }
}



/* Travels */
export function addTravel(travel) {
    return { type: ADD_TRAVEL, payload: travel }
}


export function getAllTravels() {
    return { type: GET_ALL_TRAVELS }
}

export function setTravels(travels) {
    return { type: SET_TRAVELS, payload: travels }
}



/* Sites */
export function addSite(site) {
    return { type: ADD_SITE, payload: site }
}

export function getAllSites() {
    return { type: GET_ALL_SITES }
}

export function setSites(sites) {
    return { type: SET_SITES, payload: sites }
}



/* Tickets */
export function addTicket(ticket) {
    return { type: ADD_TICKET, payload: ticket }
}

export function getAllTickets(siteId) {
    return { type: GET_ALL_TICKETS, payload: siteId}
}

export function setTickets(tickets) {
    return { type: SET_TICKETS, payload: tickets }
}


/* Streets */
export function getAllStreets() {
    return { type: GET_ALL_STREETS }
}
export function setStreets(streets) {
    return { type: SET_STREETS, payload: streets }
}



/* Neighborhood */
export function getAllNeighborhoods() {
    return { type: GET_ALL_NEIGHBORHOODS }
}
export function setNeighborhoods(neighborhoods){
    return {type: SET_NEIGHBORHOODS, payload: neighborhoods}
}



/* User */
export function getUser() {
    debugger;
    return { type: GET_USER }
}
export function setUser(user) {
    debugger;
    return { type: SET_USER, payload: user }
}

/* Orders */
export function getOrders() {
    return { type: GET_ALL_ORDERS }
}
export function setOrders(orders) {
    return { type: SET_ORDERS, payload: orders }
}
export function addOrder(order) {
    return { type: ADD_ORDER, payload: order }
}


/* Orders of this customer */
export function getOrdersOfThisCustomer(customerId) {
    return { type: GET_ALL_ORDERS_OF_THIS_CUSTOMER, payload: customerId }
}
export function setOrdersOfThisCustomer(ordersOfThisCustomer) {
    return { type: SET_ORDERS_OF_THIS_CUSTOMER, payload: ordersOfThisCustomer }
}

/*  Stations */
export function getAllStations() {
    return { type: GET_ALL_STATIONS }
}

export function setStations(stations) {
    return { type: SET_STATIONS, payload: stations }
}