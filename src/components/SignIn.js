import React,{useState, useEffect, useContext} from 'react';
//!!
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


//ספרייה שיודעת לעשות קריאת שרת
import axios from 'axios';

//בשביל הניווט
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
}from "react-router-dom";
//!!
import { getUser, setUser } from '../redux/actions';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const mapStateToProps = (state) => {
  // userReducer - האובייקט מהקומביין
  return {
    user: state.userReducer.user || {},      
  }
  // return { ...state, items: [...state.items, action.payload]};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setThisUser: (u) => dispatch(setUser(u)),
 // setOrdersOfThisCustomer: () => dispatch(setOrdersOfThisCustomer()),
})


//קומפוננטה לכניסה לאתר - למשתמשים רשומים
function SignIn(props) {
  
  const classes = useStyles();

  //!!
  const user = props.user || {};

  //בשביל מעבר בין קומפוננטות מתוך פונקציה
  const history = useHistory();
  console.log(history);
  function handleClick(page) {
    history.push(page);
  }

 
  //אובייקט בשביל לשמור את ערכי השם והסיסמא של המשתמש
  const [loginData, setLoginData]= useState({email: '',password: ''});


  //פונקציה שנקראת לאחר מילוי שדות האימייל והסיסמא על ידי המשתמש
  const checkEmailAndPassword= (event)=>{
    event.preventDefault();
    console.log(loginData.email);
   //קריאת שרת לקבלת המשתמש הרצוי -  אם הוא קיים כמובן
    axios.get(`https://localhost:44388/api/Users/GetUserByEmail/${loginData.email}`)
    // לתוך .then 
    // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
    .then((data) => {
      //console.log(JSON.stringify(data.data));
      const u1= data.data;
      console.log(u1);
     //אם הסיסמא גם תואמת לסיסמא שהתקבלה אז המשתמש מאושר להיכנס
      if(u1.password===loginData.password){
        // alert("השם והסיסמא נכונים וקיימים במערכת");
        //שמירת המייל והסיסמא בקוקי
        //document.cookie="email="+loginData.email+";";
       // document.cookie="password="+loginData.password+";";

        //!!שמירה בסטור את המשתמש הנוכחי
       
        props.setThisUser(u1);
        //איפוס המשתנה בסטור של ההזמנות ללקוח
        //props.setOrdersOfThisCustomer();

        if(u1.userTypeId===1)
          handleClick("/Management");
                  
        else
          //העברה לדף ההזמנה הראשית
          handleClick("/NewOrder");
      }        
      else
      {
        if(u1.email===loginData.email && u1.password!=loginData.password)
          alert('סיסמא שגויה');
        else
          alert("משתמש לא קיים במערכת");
      }       
    })
  };


  //פונקציה לטיפול בשינוי של שדות אינפוט שנשמרים בתוך משתנה סטייט
  const handeInputChanged=(e)=>{
    const {name, value}= e.target;
    setLoginData({...loginData, [name]: value});
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="כתובת מייל"
            name="email"
            // להקפיד לא לשלוח שום פרמטרים חוץ משם הפונקציה
            onChange={handeInputChanged}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handeInputChanged}
            label="סיסמא"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            onClick={checkEmailAndPassword}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            {/* <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>

              {/* במידה ואין למשתמש חשבון אז מעבר להרשמה ויצירת חשבון */}
              <Link to="/SignUp">Don't have an account? Sign Up</Link>   

            </Grid>
          </Grid>
        </form>
      </div>
    
    </Container>
  );
}

//!!
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);