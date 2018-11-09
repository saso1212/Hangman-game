import React from 'react';
import classes from './Button.css';

const button=(props)=>{

    return(
        <button onClick={props.clicked} className={[classes.Button,classes.btnType].join(" ")} disabled={props.disabled}>{props.children}</button>
    )
}

export default button;