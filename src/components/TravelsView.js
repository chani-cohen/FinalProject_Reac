import React, { useEffect, useState } from 'react';
//!!
import { connect } from 'react-redux';
import { List, ListItemText } from '@material-ui/core';
//!!
import { getAllTravels, getAllSites, getAllTickets, getUser, setUser, addOrder, getAllStations } from '../redux/actions';
import '../../src/App.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const useStyles = makeStyles({
    table: {

        minWidth: 250,
    },
    tableContainer: {
        maxWidth: 480,
    }
});


const mapStateToProps = (state) => {
    // travelReducer - האובייקט מהקומביין
    return {
        travelsList: state.travelReducer.travelsList || [],
        sitesList: state.siteReducer.sitesList || [],
        ticketsList: state.ticketReducer.ticketsList || [],
        //!!
        user: state.userReducer.user || {},
        stationsList: state.stationReducer.stationsList || [],
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllTravels: () => dispatch(getAllTravels()),
    getAllSites: () => dispatch(getAllSites()),
    getAllTickets: (s) => dispatch(getAllTickets(s)),
    //!!
    addOrder: (o) => dispatch(addOrder(o)),
    getStations: ()=> dispatch(getAllStations()),

    getUser: ()=> dispatch(getUser()),
})



function TravelsView(props) {

    //!!
    const user = props.user || {};
    // const user = props.user || {};

    // console.log("user")
    // console.log(user)
    const [bold, setBold] = useState(null);


    const classes = useStyles();

    const listTravels = props.travelsList || [];
    const listSites = props.sitesList || [];
    const listTickets = props.ticketsList || [];
    const listStations= props.stationsList || [];


    //לאחר לחיצה על שורה בטבלת נסיעות
    const AfterSelecetedRow = (e, row) => {

        console.log(row);
        //שינוי צבע השורה למודגשת   
        setBold(row.travelId);
        //!!
        //טעינת הכרטיסים לאתר של הנסיעה הנוכחית שנבחרה
        props.getAllTickets(row.site.siteId);
    }


    //!!
    //משתנה סטייט ששומר את המחיר של הכרטיס שנבחר בקומבו בוקס
    const [price, setPrice]= useState();


    //!!
    //קומבו בוקס לבחירת כרטיס מתאים לנסיעה
    const [ticketType, setTicketType] = useState('בחר כרטיס');
    //פונקציה שמטפלת בשינוי של בחירת כרטיס
    const handleChange = (event) => {
        const t= event.target.value;   //קוד כרטיס שנבחר בקומבו בוקס
        //alert(t);
        setTicketType(t);
        const arrTickets= listTickets.filter(ti=> ti.ticketId==t);
        setPrice(arrTickets[0]?.price);
    };


    //!!
    const [stationType, setStationType]= useState('בחר תחנה');
    //פונקציה שמטפלת בשינוי של בחירת תחנה
    const handleChangeStation=(event)=>{
        const s= event.target.value;   //קוד תחנה שנבחרה בקומבו בוקס
        //alert(s);
        setStationType(s);
    }


    useEffect(() => {
        props.getAllTravels();
        props.getAllSites();
        // props.getAllTickets();
        props.getStations();
        //     props.getUser();
    }, [])



    //אפשר למחוק את זה?????
    useEffect(() => {
        console.log(listTravels);
    }, [listTravels])

    useEffect(() => {
        console.log(listSites);
    }, [listSites])

    useEffect(() => {
        console.log(listTickets);
    }, [listTickets])

    useEffect(() => {
        console.log(listStations);
    }, [listStations])

    // useEffect(() => {
    //     console.log(user);
    // }, [user])


    //משתנה סטייט לשמירת כמות הכרטיסים שנבחרה
    const [count, setCount]= useState(0);
    const changeCount=(event)=>{
        event.preventDefault();
        setCount(event.target.value);
        //alert(event.target.value);
    }

    //פונקציה שמוסיפה הזמנה חדשה ללקוח
    const addOrder = (event) => {
        event.preventDefault();
        const orderToSave={
            email: user.email,
            ticketId: ticketType,
            travelId: bold,
            orderDate: new Date(),
            stationId: stationType,
            sendMessageAboutStation: null,
            count: count,
            sumToPay: price*count,
        };
        console.log(orderToSave);
        console.log('after print new order');

        //קריאת שרת לשמירת ההזמנה החדשה
        props.addOrder(orderToSave);
    }



    return (
        <div>

            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'flex', p: 1 }}>
                    <Box sx={{ p: 1, order: 1 }}>
                        {/* <h2>קודים של הנסיעות הקיימות</h2>
            {listTravels && listTravels.length && listTravels.map(t => <div>{t.travelId}</div>)}
            <h2>שמות האתרים</h2>
            {listSites && listSites.length && listSites.map(s => <div>{ s.nameSite}</div>)}
            <h2>קודים של הכרטיסים הקיימים</h2>
            {listTickets && listTickets.length && listTickets.map(t => <div>{ t.ticketId}</div>)} */}

                        <TableContainer className={classes.tableContainer} component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>אתר</TableCell>
                                        <TableCell align="right">תאריך נסיעה</TableCell>
                                        <TableCell align="right">שעת יציאה</TableCell>
                                        <TableCell align="right">שעת חזרה</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listTravels && listTravels.map((row) => (
                                        // <TableRow key={row.travelId} onClick={(e) => { AfterSelecetedRow(e, row) }} className={bold === row.travelId ? 'design_select_Red' : ''}>
                                        //     <TableCell component="th" scope="row">
                                        //         1
                                        //     </TableCell>
                                        //     <TableCell align="right">1</TableCell>
                                        //     <TableCell align="right">1</TableCell>
                                        //     <TableCell align="right">2</TableCell>
                                        // </TableRow>

                                           <TableRow key={row.travelId} onClick={(e) => { AfterSelecetedRow(e, row) }} className={bold === row.travelId ? 'design_select_Red' : ''}>
                                            <TableCell component="th" scope="row">
                                                {row.site.nameSite}
                                            </TableCell>
                                            <TableCell align="right">{row.travelDate.substring(0, 10)}</TableCell>
                                            <TableCell align="right">1</TableCell>
                                            <TableCell align="right">2</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>




                    </Box>



                    <Box sx={{ p: 1, order: 2 }} style={{ display: 'flex', flexDirection: 'column' }}>



                        
                        <TextField
                            style={{ margin: '20px' }}
                            // style={{ padding: '20px' }}
                            id="outlined-select-ticket"
                            select
                            label="בחר כרטיס"
                            value={ticketType}
                            onChange={handleChange}
                            // helperText="Please select type of ticket"
                        >
                            {listTickets.map((t) => (
                                <MenuItem key={t.ticketId} value={t.ticketId}>
                                    {`${t.untilAge} - ${t.fromAge} מחיר: ${t.price}`}
                                </MenuItem>
                            ))}
                        </TextField>
                        

                        <div style={{ margin: '20px' }}>
                        <TextField
                            // style={{ padding: '20px' }}
                            id="standard-number"
                            label="כמות כרטיסים"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={changeCount}
                        />
                        </div>



                        <TextField
                            style={{ margin: '20px' }}
                            // style={{ padding: '20px' }}
                            id="outlined-select-station"
                            select
                            label="בחר תחנה"
                            value={stationType}
                            onChange={handleChangeStation}
                        >
                            {listStations.map((s) => (
                                <MenuItem key={s.stationId} value={s.stationId}>
                                    {s.stationAddress}
                                </MenuItem>
                            ))}
                        </TextField> 


                        <Button variant="contained" size="small" onClick={addOrder}>
                            הוסף
                        </Button>

                    </Box>
                </Box>
            </div>



        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TravelsView);
