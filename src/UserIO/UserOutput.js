import React from 'react';
import './UserOutput.css';

const user_output = ( props ) => {
    return(
        <div className="userOutput">
            <input type="hidden" value={props.initialName} />
            <p>
                This is a(n) {props.name} made in {props.madeIn}. 
            </p>
            <p>
                The price is {props.price}.
            </p>
        </div>
    )
}

export default user_output;