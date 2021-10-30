import { DeviceHubOutlined } from '@material-ui/icons';
import axios from 'axios';
import { GET_ALL_ORDERS_OF_THIS_CUSTOMER, setOrdersOfThisCustomer, ADD_ORDER, SET_ORDERS_OF_THIS_CUSTOMER } from '../actions/index'

export const getOrdersOfCustomerMiddleWare = store => next => action => {
    
    if (action.type === GET_ALL_ORDERS_OF_THIS_CUSTOMER) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get(`https://localhost:44388/api/orders/GetOrderByEmail/${action.payload}`)
        // axios.get('https://localhost:44388/api/orders/GetOrderByEmail/odaya1350@gmail.com')
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                debugger;
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setOrdersOfThisCustomer(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    if (action.type === ADD_ORDER) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.post('https://localhost:44388/api/Orders/AddOrder', action.payload)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setOrdersOfThisCustomer(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    // if (action.type === SET_ORDERS_OF_THIS_CUSTOMER) {                   
    //         store.dispatch(setOrdersOfThisCustomer([]))
    // }
    return next(action)
}