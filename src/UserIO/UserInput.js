import React from 'react';

const user_input = ( props ) => {
    const myStyle = {
        margin: "auto",
        border: "1px solid",
        width: "30%",
        padding: "0 0 10px 0",
        textAlign: "center",
        backgroundColor: "lightgreen"
    }

    return(
        <div style={myStyle}>
            <span id='inputlabel'>Your Input: </span>
            <input type='text' onChange={props.changed} />
        </div>
    )
}

export default user_input;