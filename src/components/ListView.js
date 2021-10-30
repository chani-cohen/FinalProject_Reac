import React from 'react';
import { List, ListItemText } from '@material-ui/core';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    // debugger;
 return {items: state.list.items || []}
 // return { ...state, items: [...state.items, action.payload]};
}


function ListView(props) {

    const listItems = props.items || [];
    const listItemsJSX = listItems.map(item => <ListItemText
        key={item}>{item}</ListItemText>);

    return (
        <List>
            {listItemsJSX}
        </List>
    );
}

export default connect(
    mapStateToProps,
    null
)(ListView);
   