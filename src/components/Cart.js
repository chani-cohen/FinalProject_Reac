import React, { useEffect } from 'react';
import { List, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';
import { getAllTravels, getAllSites, getAllTickets, getOrders, getUser, getOrdersOfThisCustomer } from '../redux/actions';
import '../../src/App.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {

        minWidth: 250,
    },
    tableContainer: {
        maxWidth: 900,
    }
});



const mapStateToProps = (state) => {
    // travelReducer - האובייקט מהקומביין
    return {
        //travelsList: state.travelReducer.travelsList || [], 
        //sitesList: state.siteReducer.sitesList || [],
        //ticketsList: state.ticketReducer.ticketsList || [],
        ordersList: state.orderReducer.ordersList || [],
        ordersOfThisCustomer_List: state.orderOfThisCustomerReducer.ordersOfThisCustomer_List || [],
        user: state.userReducer.user || {},
    }
    // return { ...state, items: [...state.items, action.payload]};
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    //getAllTravels: () => dispatch(getAllTravels()),
    //getAllSites: () => dispatch(getAllSites()),
    //getAllTickets: () => dispatch(getAllTickets())
    getOrders: () => dispatch(getOrders()),

    getOrdersOfThisCustomer: (email) => dispatch(getOrdersOfThisCustomer(email)),
    //getThisUser: () => dispatch(getUser()),
})



function Cart(props) {


    const classes = useStyles();

    //const user= props.getThisUser() || {};
    //const listTravels = props.travelsList || [];
    //const listSites= props.sitesList || [];
    //const listTickets= props.ticketsList || [];
    //const ordersList= props.ordersList || [];

    // //כשהמשתמש משתנה אז טעינה של ההזמנות של המשתמש החדש בהתאמה
    // useEffect(() => {
    //     props.getOrdersOfThisCustomer(props.user.email);
    // }, [props.user])


    //const user= props.getThisUser();
    useEffect(() => {
        // props.getAllTravels();
        // props.getAllSites();
        // props.getAllTickets();
        //props.getOrders();
        //!! ??
        props.getOrdersOfThisCustomer('odaya1350@gmail.com');
    }, [])
    const ordersOfThisCustomer_List = props.ordersOfThisCustomer_List || [];

    // useEffect(() => {
    //     console.log(props.ordersOfThisCustomer_List);

    // }, [props.ordersOfThisCustomer_List])




    // useEffect(() => {
    //     console.log(listTravels);
    // //??התאמה בין קוד האתר לשם האתר      
    // }, [listTravels])

    // useEffect(() => {
    //     console.log(listSites);
    // }, [listSites])

    // useEffect(() => {
    //     console.log(listTickets);
    // }, [listTickets])




    return (
        <div>



            {/* 
            השדות שיהיו מוצגים כאן:
            שם אתר           
            תאריך נסיעה
            שעת יציאה 
            שעת חזרה
            סוג כרטיס - מגיל עד גיל
            מחיר
            כמות
            סך הכל
         */}




            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>אתר</TableCell>
                            <TableCell align="right">תאריך נסיעה</TableCell>
                            <TableCell align="right">שעת יציאה</TableCell>
                            <TableCell align="right">שעת חזרה</TableCell>
                            <TableCell align="right">טווח גילאים</TableCell>
                            <TableCell align="right">מחיר כרטיס</TableCell>
                            <TableCell align="right">כמות</TableCell>
                            <TableCell align="right">סה"כ</TableCell>
                            <TableCell align="right">תחנת איסוף/הורדה</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ordersOfThisCustomer_List && ordersOfThisCustomer_List.map((row) => (
                            // <TableRow key={row.orderId}>
                            // <TableCell component="th" scope="row">
                            //         1
                            // </TableCell>
                            // <TableCell align="right">1</TableCell>
                            // <TableCell align="right">15</TableCell>
                            // <TableCell align="right">21</TableCell>
                            // <TableCell align="right">1</TableCell>           
                            // <TableCell align="right">1</TableCell> 
                            // <TableCell align="right">1</TableCell> 
                            // <TableCell align="right">1</TableCell> 
                            // <TableCell align="right">1</TableCell>  
                            // </TableRow>


                            <TableRow key={row.orderId}>
                                <TableCell component="th" scope="row">
                                    {row.travel?.site?.nameSite}
                                </TableCell>
                                <TableCell align="right">{row.travel?.travelDate?.substring(0, 10)}</TableCell>
                                <TableCell align="right">15</TableCell>
                                <TableCell align="right">21</TableCell>
                                <TableCell align="right">{`${row.ticket?.untilAge} - ${row.ticket?.fromAge}`}</TableCell>
                                <TableCell align="right">{row.ticket?.price}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{row.sumToPay}</TableCell>
                                <TableCell align="right">{row.station?.stationAddress}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>




        </div>
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
