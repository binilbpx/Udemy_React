import React from 'react';

const Char = (props) =>{

    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black'
    };

    return(
        <div style={style} onClick = {props.deleteChar}>
            <span>{ props.character }</span>
        </div>
    );
}

export default Char;