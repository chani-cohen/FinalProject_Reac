import axios from 'axios';
import { ADD_SITE, GET_ALL_SITES, setSites } from '../actions/index';

export const getSitesMiddleWare = store => next => action => {
    if (action.type === GET_ALL_SITES) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get('https://localhost:44388/Sites/GetAllSites')
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setSites(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    //TODO!!
    //להפעיל ולבדוק שעובד
    if (action.type === ADD_SITE) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        let obj= {           
            "nameSite": "הפארק הגדול",
            "status": true,          
        };
        axios.get('https://localhost:44388/Sites/AddSite', obj)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setSites(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    return next(action)
}