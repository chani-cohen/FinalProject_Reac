import axios from 'axios';
import { ADD_TRAVEL, GET_ALL_TRAVELS, setTravels } from '../actions/index'

export const getTravelsMiddleWare = store => next => action => {
    if (action.type === GET_ALL_TRAVELS) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get('https://localhost:44388/api/Travels/GetAllTravels')
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    //TODO!!
    //לסדר את האובייקט
    //להפעיל ולבדוק שעובד
    if (action.type === ADD_TRAVEL) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        let obj= {
      
            "siteId": 1,
            "travelDate": "2021-01-01T00:00:00",
            "leavingTime": {
                "hours": 15,
                "minutes": 0,
                "seconds": 0
            }
        };
        axios.get('https://localhost:44388/api/Travels/AddTravel', obj)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    return next(action)
}