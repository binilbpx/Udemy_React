import React from 'react';

const Validation = (props) =>{

    let validationMessage = '';
    if(props.messageLength < 5){
        validationMessage = 'Text too short';
    }
    else
    {
        validationMessage = 'Text long enough';
    }

    return(
        <div>
            {validationMessage}
        </div>
    );
}

export default Validation;