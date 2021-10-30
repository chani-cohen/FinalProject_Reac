import React, {useState} from 'react';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './redux/reducer';

import axios from 'axios';
import { getTravelsMiddleWare } from './redux/middleware/travel.crud';
import { composeWithDevTools } from 'redux-devtools-extension';

import store from './redux/store';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
);



// const store = createStore(rootReducer, { 
//   list: {items: ["clothes"]},
//   travelReducer: ["t1"]
//   },
//   composeWithDevTools(applyMiddleware(ReduxThunk,getTravelsMiddleWare)));
  
  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  
  // serviceWorker.unregister();
  
  
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  
  
  
  
  //  // פונקציה לקריאת שרת שאמורה לקבל נתונים
  //     // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
  //     axios.get('https://localhost:44388/api/Travels/GetAllTravels')
  //     // לתוך .then 
  //     // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
  //     .then((data) => {
  //       debugger;
  //       travels= data.data;
  //       //console.log(data.data);
  //       //console.log(travels);
  //     })
  