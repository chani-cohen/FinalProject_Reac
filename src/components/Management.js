import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import AddNewTravel from './AddNewTravel';
import { green, pink, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@mui/material/Link';

// bus icon
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// update travel icon
import BusAlertIcon from '@mui/icons-material/BusAlert';
// park icon
import ParkIcon from '@mui/icons-material/Park';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));


//עמוד ניהול -  רק מנהל המערכת מורשה לבצע את הפעולות הבאות
function Management() {

    const classes = useStyles();


    return (
        <div>

            <h1>ברוך הבא מנהל</h1>


            <div style={{ width: '100%' }} className={classes.paper} >

                {/* <Box >
                    <Box
                           component="form"
                           sx={{
                             '& .MuiTextField-root': { m: 1, width: '25ch' },
                           }}
                           noValidate
                           autoComplete="off"
                    > */}
    <Stack direction="row" spacing={2}>


                        <div>
                            <Link href="AddNewTravel">
                                <Avatar sx={{ bgcolor: green[500], margin: 6, width: 125, height: 125 }} >
                                    <DirectionsBusIcon />
                                    {/* <label>הוספת נסיעה</label> */}
                                </Avatar>
                            </Link>
                            <Avatar color="action" sx={{ margin: 6, width: 125, height: 125 }}>
                                <BusAlertIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: red[500], margin: 6, width: 125, height: 125 }}>
                                <DirectionsBusIcon />
                            </Avatar>
                        </div>
                        <div>
                            <Avatar sx={{ bgcolor: green[500], margin: 6, width: 125, height: 125 }}>
                                <ParkIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: pink[500], margin: 6, width: 125, height: 125 }}>
                                <DirectionsBusIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: green[500], margin: 6, width: 125, height: 125 }}>
                                <DirectionsBusIcon />
                            </Avatar>
                        </div>
                        <div>
                            <Avatar sx={{ bgcolor: green[500], margin: 6, width: 125, height: 125 }}>
                                <ParkIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: pink[500], margin: 6, width: 125, height: 125 }}>
                                <DirectionsBusIcon />
                            </Avatar>
                            <Avatar sx={{ bgcolor: green[500], margin: 6, width: 125, height: 125 }}>
                                <DirectionsBusIcon />
                            </Avatar>
                        </div>
                        </Stack>


{/* 
                    </Box>
                </Box> */}

            </div>




            {/* למנהל יש אופציות של:
             הוספת נסיעה חדשה
              עידכון נסיעה לשעה אחרת או תאריך אחר אם אין נרשמים
              מחיקת נסיעה אם אין נרשמים 
                הוספת אתר חדש
                הוספת כרטיסים לאתר
                עידכון כרטיס לאתר אם אין נסיעה עתידית עם נרשמים...
                הוספת נהג חדש
                הוספת אוטובוס חדש
                שיבוץ אוטובוס לנסיעה
                שיבוץ נרשמים לאוטובוס
                קביעת מסלול לאוטובוס
                סגירת ההרשמה לנסיעה מסוימת?
                ביטול נסיעה באין מספיק נרשמים?

                עידכון פרטי נהג קיים או מחיקתו באין שיבוץ מסוים בו מופיע
                עידכון אתר או מחיקתו באין נסיעות אליו
            */}

            {/* <AddNewTravel/> */}
        </div>
    )
}

export default Management;


