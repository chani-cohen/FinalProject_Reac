import React, {useEffect, useState, createContext} from 'react';


//ספרייה שיודעת לעשות קריאת שרת
import axios from 'axios';

export const usersContext= createContext([]);


export default function UsersContext(props){

   const [users, setUsers]= useState([]);

  // כששולחים ל useEffect מערך ריק
  // הפונקציה ציקרא רק פעם אחת - בפעם הראשונה שהקומפוננטה נטענת
  useEffect(() => {
    
    // פונקציה לקריאת שרת שאמורה לקבל נתונים
    // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
    axios.get('https://localhost:44388/api/Users/GetAllUsers')
    // לתוך .then 
    // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    .then((data) => {
      //debugger;
      setUsers(data.data);
      //console.log(data.data);
      //console.log(users);
    })


    // axios.get(`https://localhost:44388/api/Users/GetUserByEmail/${"odaya1350@gmail.com"}`)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   console.log(JSON.stringify(data.data));
    // })


    // let newUser={
    //     "email": "efratDadon@gmail.com",
    //     "password": "efrat1111",
    //     "userTypeId": 2,
    //     "userName": "efrat dadon",
    //     "userType": null
    // };


    // axios.post('https://localhost:44388/api/Users/AddUser', newUser)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setUsers(data.data);
    //   console.log(data.data);
    //   console.log(users);
    // })


    // let updateUser={
    //     "email": "efratDadon@gmail.com",
    //     "password": "efrat1234",
    //     "userTypeId": 2,
    //     "userName": "efrat dadon",
    //     "userType": null
    // };
    

    // axios.put('https://localhost:44388/api/Users/UpdateUser', updateUser)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setUsers(data.data);
    //   console.log(data.data);
    //   console.log(users);
    // })


    // axios.delete(`https://localhost:44388/api/Users/DeleteUser/${"efratDadon@gmail.com"}`)
    // // לתוך .then 
    // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    // .then((data) => {
    //   debugger;
    //   setUsers(data.data);
    //   console.log(data.data);
    //   console.log(users);
    // })


  }, []);


    return(
        <usersContext.Provider value={users}>
           {/* children - מאפיין שמגיע תמיד, מכיל את מה שנכנס בתוך הקומפוננטה */}
            {props.children}
        </usersContext.Provider>
    )

}