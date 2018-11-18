import React from 'react';
import classes from './Word.css'
import LetterImage from '../LetterImage/LetterImage';

const word =(props)=>{
    
    return(
        <div className={classes.Word}>
            <span  style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>{props.letter !==" "?<LetterImage letterType="LetterType"  letter={require(`../../assets/Letters/bk/${props.letter}.svg`)}
                letterDescription={`letter ${props.letter}` } /> : null}</span>
            <div style={{
                opacity:!props.hide ? '1': '0'
            }}></div>
        </div>
    )
}
    
export default word;