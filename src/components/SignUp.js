import React, { useEffect, useState } from 'react';
//!!
import { connect } from 'react-redux';
import TravelsView from './TravelsView';
//ספרייה שיודעת לעשות קריאת שרת
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//!!
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

//בשביל הניווט
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { getUser, setUser, getAllStreets, getAllNeighborhoods } from '../redux/actions';


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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const mapStateToProps = (state) => {
    // userReducer - האובייקט מהקומביין
    return {
        user: state.userReducer.user || {},
        streetsList: state.streetReducer.streetsList || [],
        neighborhoodsList: state.neighborhoodReducer.neighborhoodsList || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setThisUser: (u) => dispatch(setUser(u)),
    getStreets: () => dispatch(getAllStreets()),
    getNeighborhoods: () => dispatch(getAllNeighborhoods()),
})

//קומפוננטה להרשמה ולכניסה לאתר 
function SignUp(props) {

    const user = props.user || {};

    const listStreets = props.streetsList || [];
    const listNeighborhoods = props.neighborhoodsList || [];

    useEffect(() => {
        props.getStreets();
        props.getNeighborhoods();
    }, [])

    //בשביל מעבר בין קומפוננטות מתוך פונקציה
    const history = useHistory();
    function handleClick() {
        history.push("/NewOrder");
    }



    //אובייקט שישמור לי את שדות המשתמש החדש 
    const [loginData, setLoginData] = useState({ email: '', password: '', userTypeId: 3, userName: '', userType: null });
    //אובייקט שישמור לי את שדות הלקוח החדש 
    const [loginData2, setLoginData2] = useState({
        email: '',
        lastName: '', streetId: 1, houseNumber: 1, neighborhoodId: 1, tel: '', phone: '', neighborhood: null, street: null
    });



    //פונקציה לטיפול בשינוי של שדות אינפוט שנשמרים בתוך משתנה סטייט ששומר את פרטי המשתמש
    const handelLoginData = async (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });

        //השם מתעדכן גם אצל האוביקט לשמירת פרטי הלקוח
        if (name == 'email') {
            setLoginData2({ ...loginData2, email: value });
        }
    }

    //פונקציה לטיפול בשינוי של שדות אינפוט שנשמרים בתוך משתנה סטייט ששומר את פרטי הלקוח
    const handelLoginData2 = (e) => {
        const { name, value } = e.target;
        //אם השדה אמור להיות מסוג מספר המרה לאינט
        if (name == 'houseNumber') {
            setLoginData2({ ...loginData2, [name]: parseInt(value) });
        }
        else {
            setLoginData2({ ...loginData2, [name]: value });
        }
    }

    //!!
    //קומבו בוקס לבחירת רחוב 
    const [streetId, setStreetId] = useState('בחר רחוב');
    //פונקציה שמטפלת בשינוי של בחירת כרטיס
    const handleChangeStreet = (event) => {
        const { name, value } = event.target;   //קוד רחוב שנבחר בקומבו בוקס
        debugger;
        setStreetId(value);
        setLoginData2({ ...loginData2, [name]: parseInt(value) });
    };

     //!!
    //קומבו בוקס לבחירת שכונה 
    const [neighborhoodId, setNeighborhoodId] = useState('בחר שכונה');
    //פונקציה שמטפלת בשינוי של בחירת כרטיס
    const handleChangeNeighborhood = (event) => {
        const { name, value } = event.target;   //קוד שכונה שנבחר בקומבו בוקס
        debugger;
        setNeighborhoodId(value);
        setLoginData2({ ...loginData2, [name]: parseInt(value) });
    };


    //פונקציה לשמירת המשתמש החדש כמשתמש וכלקוח
    const addUser = (event) => {
        event.preventDefault();

        console.log(loginData2);
        console.log('in add user');
        //קריאת שרת לקבלת המשתמש הרצוי -  אם הוא קיים כמובן
        axios.get(`https://localhost:44388/api/Users/GetUserByEmail/${loginData.email}`)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then((data) => {
                // console.log(JSON.stringify(data.data));
                const u1 = data.data;
                console.log(u1);
                console.log('after print u1');
                //אם המשתמש קיים
                if (u1.email === loginData.email) {
                    alert('מייל קיים במערכת');
                }
                else {
                    alert('מייל לא קיים במערכת המשתמש מתווסף עכשיו');
                    console.log(loginData);
                    console.log(loginData2);

                    //!!קריאה אחת לשמירת משתמש ולקוח חדשים
                    //יש שינויים גם בצד שרת בגלל זה שולחת לך...
                    //קריאת שרת להוספת המשתמש החדש למערכת
                    axios.post('https://localhost:44388/api/Users/AddUser', { u: loginData, c: loginData2 })
                        // לתוך .then 
                        // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת        
                        .then((data) => {
                            const allUsers = data.data;
                            console.log(allUsers);
                        })

                    //!!שמירה בסטור את המשתמש הנוכחי
                    props.setThisUser(loginData);
                    //איפוס המשתנה בסטור של ההזמנות ללקוח
                    //props.setOrdersOfThisCustomer();

                    //העברה לדף של ההזמנה הראשית
                    handleClick();
                }

            });
    }

    const classes = useStyles();

    return (
        <div>


            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="שם משתמש"
                                    name="userName"
                                    autoComplete="name"
                                    onChange={handelLoginData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="כתובת מייל"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handelLoginData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמא"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handelLoginData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    autoComplete="name"
                                    onChange={handelLoginData2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="streetId"
                                    label="StreetId"
                                    name="streetId"
                                    type="number"
                                    autoComplete="street"
                                    onChange={handelLoginData2}
                                /> */}

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label">רחוב</InputLabel>
                                    <Select
                                        //style={{ margin: '20px' }}
                                        //labelId="demo-simple-select-helper-label"
                                        //id="demo-simple-select-helper"
                                        //id="outlined-select-street"
                                        fullWidth
                                        label="רחוב"
                                        name="streetId"
                                        value={streetId}
                                        onChange={handleChangeStreet}
                                    >
                                        {listStreets.map((s) => (
                                            <MenuItem key={s.streetId} value={s.streetId}>
                                                {s.streetName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="houseNumber"
                                    label="מספר בית"
                                    name="houseNumber"
                                    type="number"
                                    autoComplete="number"
                                    onChange={handelLoginData2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="neighborhoodId"
                                    label="קוד שכונה"
                                    name="neighborhoodId"
                                    type="number"
                                    autoComplete=""
                                    onChange={handelLoginData2}
                                /> */}
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-helper-label">שכונה</InputLabel>
                                    <Select
                                        //style={{ margin: '20px' }}
                                        //labelId="demo-simple-select-helper-label"
                                        //id="demo-simple-select-helper"
                                        //id="outlined-select-street"
                                        fullWidth
                                        label="שכונה"
                                        name="neighborhoodId"
                                        value={neighborhoodId}
                                        onChange={handleChangeNeighborhood}
                                    >
                                        {listNeighborhoods.map((n) => (
                                            <MenuItem key={n.neighborhoodId} value={n.neighborhoodId}>
                                                {n.neighborhoodName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="tel"
                                    label="טלפון"
                                    name="tel"
                                    autoComplete="phone"
                                    onChange={handelLoginData2}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="נייד"
                                    name="phone"
                                    autoComplete="phone"
                                    onChange={handelLoginData2}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            onClick={addUser}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                </Button>
                        <Grid container >
                            <Grid item>

                                <Link to="/SignIn">Already have an account? Sign in</Link>

                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>


        </div>
    )

}
//!!
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
