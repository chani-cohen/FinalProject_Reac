import { DeviceHubOutlined } from '@material-ui/icons';
import axios from 'axios';
import { SET_USER, GET_USER, setUser, getUser } from '../actions/index'

export const getUserMiddleWare = store => next => action => {
    if (action.type === GET_USER) { 
        debugger; 
        store.dispatch(getUser());
    }
    
    // if (action.type === SET_USER) {
    //     debugger;
    //     store.dispatch(setUser(action.payload));    
    // }
    return next(action)
}