import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { addItem } from '../redux/actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch, ownProps) => ({
    addToList: (item) => dispatch(addItem(item))
})
function ListInput(props) {

    const [item, setItem] = useState('');

    function changeHandler(e) {
        setItem(e.target.value);
    };
    function clickHandler(e) {
        props.addToList(item);
    };

    return (
        <div>
            <TextField onChange={changeHandler} />
            <Button onClick={clickHandler}>Insert item to list</Button>
        </div>
    );


}
export default connect(
    null,
    mapDispatchToProps
)(ListInput)   