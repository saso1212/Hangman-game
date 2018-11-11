import React from 'react';
import classes from './Word.css'


const word =(props)=>{
    
    return(
        <div className={classes.Word}>
            <span  style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>{props.children}</span>
            <div style={{
                opacity:!props.hide ? '1': '0'
            }}></div>
        </div>
    )
}
    
export default word;