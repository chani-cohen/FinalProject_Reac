import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import '../../src/App.css';
import Cart from './Cart';
import TravelsView from './TravelsView';
import '../../src/App.css';



function NewOrder(props) {


    return(
        <div>
        <h1>TRAVELS</h1>
        <div>
    


        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', p: 1}}>
                <Box sx={{ p: 1, order: 1}}><TravelsView/></Box>
                <Box sx={{ p: 1, order: 2}}><Cart/></Box>
            </Box>
         </div>

                 

        </div>
        </div>
        
    )
}

export default NewOrder;


