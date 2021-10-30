import axios from 'axios';
import { ADD_TICKET, GET_ALL_TICKETS, setTickets } from '../actions/index';

export const getTicketsMiddleWare = store => next => action => {
    if (action.type === GET_ALL_TICKETS) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get(`https://localhost:44388/api/Tickets/GetTicketByIdSite/${action.payload}`)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setTickets(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
   
    return next(action)
}