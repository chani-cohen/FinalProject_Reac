import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// ספרייה שיודעת לעשות קריאות שרת
import axios from 'axios';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import NewOrder from './components/NewOrder';
import Management from './components/Management';
import AddNewTravel from './components/AddNewTravel';


// import UsersContext from './data/UsersContext';
// import SitesContext from './data/SitesContext';
// import TravelsContext from './data/TravelsContext';

// import ListView from './components/ListView';
// import ListInput from './components/ListInput';

//בשביל הניווט
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const[url, setUrl] = '';
  useEffect(()=>{

  },[url])
  return (
    <div className="App">


    <Router>
    <Link to="/SignUp"></Link>
    <Link to="/SignIn"></Link>
    <Link to="/NewOrder"></Link>
    <Link to='/Management'></Link>
    <Link to="/"></Link>
    <Switch>
      <Route path="/SignUp">                    
        <SignUp setUrl={setUrl}/>
      </Route> 
      <Route path="/SignIn">
        <SignIn/>
      </Route>
      <Route path="/NewOrder">
        <NewOrder/>
      </Route>
      <Route path="/Management">
        <Management/>
      </Route>
      <Route exact path="/AddNewTravel">
        <AddNewTravel/>
      </Route>
      <Route exact path="/">
        <SignIn/>
      </Route>
    </Switch>
  </Router>

  
     
{/* 
      <ListInput />
      <ListView />  */}

    </div>
  );
}

export default App;








//התקנות:


//:בשביל הניווט באתר
//npm install react-router-dom


//:עיצובים
//npm install @material-ui/core


//:התקנה של ספריית קריאות
//npm i axios




//משגיח
// כלומר משגיח, הספריה mobx
// תדאג לרנדר את הקומפוננטה בכל שינוי
//npm install mobx