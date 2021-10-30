import React, { useEffect, useState } from 'react';
//!!
import { connect } from 'react-redux';
import { addTravel, getAllSites, getAllTickets } from '../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const mapStateToProps = (state) => {
    return {
        sitesList: state.siteReducer.sitesList || [],
        ticketsList: state.ticketReducer.ticketsList || [],
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllSites: () => dispatch(getAllSites()),
    //getAllTickets: () => dispatch(getAllTickets())

    addTravel: () => dispatch(addTravel()),
})


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function AddNewTravel(props) {

    const listSites = props.sitesList || [];

    const classes = useStyles();

    //משתנה לשמירת קוד אתר 
    const [siteId, setSiteId] = useState('בחר אתר');

    //משתני עזר לשמירת שעות יציאה וחזרת נסיעה
    const [leavingTime, setLeavingTime] = useState(0);
    const [returnTime, setReturnTime] = useState(0);

    //פונקציה שמטפלת בשינוי של בחירת שם אתר
    const handleChange = (event) => {
        const s = event.target.value;   //קוד אתר שנבחר בקומבו בוקס
        //עדכון קוד אתר
        setSiteId(s);
    };

    useEffect(() => {
        props.getAllSites();
    }, [])

    useEffect(() => {
        console.log(listSites);
    }, [listSites])

    const addNewTravel = (event) => {
        event.preventDefault();
        const travelToSave = {
            siteId: siteId,
            travelDate: new Date(),
            sendMessageAboutStation: null,
            leavingTime: leavingTime,
            returnTime: returnTime,
        };
        console.log(travelToSave);
        console.log('after print new travel');

        //קריאת שרת לשמירת ההזמנה החדשה
        props.addTravel(travelToSave);
    }

    return (
        <div>


            <div style={{ width: '100%' }} className={classes.paper}>

                <Box >
                    {/* sx={{ display: 'flex', p: 1 }} */}
                    <Box component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >


                        <TextField
                            // variant="outlined"
                            size="medium"
                            margin="normal"
                            // style={{ margin: '150px' }}
                            id="outlined-select-site"
                            select
                            label="בחר אתר"
                            value={siteId}
                            onChange={handleChange}
                        >
                            {listSites.map((s) => (
                                <MenuItem key={s.siteId} value={s.siteId}>
                                    {s.nameSite}
                                </MenuItem>
                            ))}
                        </TextField>



{/* 
                        <Button variant="contained" size="small" onClick={addNewTravel}>
                            הוסף
                        </Button> */}









                    </Box>

                </Box>
            </div>



        </div>
    )
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewTravel);
