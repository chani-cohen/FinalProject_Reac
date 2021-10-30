import React, {createContext, useState, useEffect} from 'react';

//ספרייה שיודעת לעשות קריאת שרת
import axios from 'axios';

export const sitesContext= createContext([]);


export default function SitesContext(props){

    console.log('in render context');
    const [sites, setSites]= useState([]);


    // כששולחים ל useEffect מערך ריק
    // הפונקציה תיקרא רק פעם אחת - בפעם הראשונה שהקומפוננטה נטענת
    useEffect(() => {
    
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get('https://localhost:44388/Sites/GetAllSites')
        // לתוך .then 
        // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
        .then((data) => {
          // debugger;
          setSites(data.data);
          //console.log(data.data);
          //console.log(sites);
        })
    
    
        // axios.get(`https://localhost:44388/Sites/GetSiteById/${2}`)
        // // לתוך .then 
        // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
        // .then((data) => {
        //   debugger;
        //   console.log(JSON.stringify(data.data));
        // })
    
    
        // let newSite={
        //   "nameSite": "אשדוד יםםם",
        //   "status": true,
        //   "tblTickets": [],
        //   "tblTravels": []
        // };
    
        // axios.post('https://localhost:44388/Sites/AddSite', newSite)
        // // לתוך .then 
        // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
        // .then((data) => {
        //   debugger;
        //   setSites(data.data);
        //   console.log(data.data);
        //   console.log(sites);
        // })
    
    
        // let updateSite={
        //   "siteId": 1,
        //   "nameSite": "אשדוד ים",
        //   "status": true,
        //   "tblTickets": [],
        //   "tblTravels": []
        // };
        
    
        // axios.put('https://localhost:44388/Sites/UpdateSite', updateSite)
        // // לתוך .then 
        // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
        // .then((data) => {
        //   debugger;
        //   setSites(data.data);
        //   console.log(data.data);
        //   console.log(sites);
        // })
    
    
        // axios.delete(`https://localhost:44388/Sites/DeleteSite/${6}`)
        // // לתוך .then 
        // // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
        // .then((data) => {
        //   debugger;
        //   setSites(data.data);
        //   console.log(data.data);
        //   console.log(sites);
        // })
    
    
      }, []);

      return(
        <sitesContext.Provider value={sites}>
              {/* children - מאפיין שמגיע תמיד, מכיל את מה שנכנס בתוך הקומפוננטה */}
              { props.children}
        </sitesContext.Provider>    
    );

}