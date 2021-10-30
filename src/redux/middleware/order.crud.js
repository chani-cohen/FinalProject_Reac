import { DeviceHubOutlined } from '@material-ui/icons';
import axios from 'axios';
import { GET_ALL_ORDERS, setOrders } from '../actions/index'

export const getOrdersMiddleWare = store => next => action => {
    
    if (action.type === GET_ALL_ORDERS) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get('https://localhost:44388/api/Orders/GetAllOrders')
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setOrders(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    return next(action)
}