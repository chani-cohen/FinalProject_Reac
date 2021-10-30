import React, {useEffect, useState, createContext} from 'react';


//ספרייה שיודעת לעשות קריאת שרת
import axios from 'axios';

export const travelsContext= createContext([]);


export default function TravelsContext(props){

   const [travels, setTravels]= useState([]);

  // כששולחים ל useEffect מערך ריק
  // הפונקציה תיקרא רק פעם אחת - בפעם הראשונה שהקומפוננטה נטענת
  useEffect(() => {
    
    // פונקציה לקריאת שרת שאמורה לקבל נתונים
    // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
    axios.get('https://localhost:44388/api/Travels/GetAllTravels')
    // לתוך .then 
    // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    .then((data) => {
      // debugger;
      setTravels(data.data);
      //console.log(data.data);
      //console.log(travels);
    })


    // axios.get(`https://localhost:44388/api/Travels/GetTravelById/1`)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   console.log(JSON.stringify(data.data));
    // })


    // let newTravel={

    // };


    // axios.post('https://localhost:44388/api/Travels/AddTravel', newTravel)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setTravels(data.data);
    //   console.log(data.data);
    //   console.log(travels);
    // })


    // let updateTravel={

    // };
    

    // axios.put('https://localhost:44388/api/Travels/UpdateTravel', updateTravel)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setTravels(data.data);
    //   console.log(data.data);
    //   console.log(travels);
    // })


    // axios.delete(`https://localhost:44388/api/Travels/DeleteTravel/1`)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setTravels(data.data);
    //   console.log(data.data);
    //   console.log(travels);
    // })


  }, []);


    return(
        <travelsContext.Provider value={travels}>
           {/* children - מאפיין שמגיע תמיד, מכיל את מה שנכנס בתוך הקומפוננטה */}
            {props.children}
        </travelsContext.Provider>
    )

}