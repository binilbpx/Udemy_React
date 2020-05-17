import React, {Component} from 'react';

const UserInput = (props) =>{
    return(
        <div>
            <p><input onChange={props.click} value={props.username}/></p>
        </div>
    );
}

export default UserInput;