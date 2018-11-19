import React from 'react';
import classes from './LetterImage.css';


const letterImage = props=>{
    return(
        <img src={props.letter} className={[classes.Letter,classes[props.letterType]].join(" ")} alt={props.letterDescription}></img>
    )
}

export default letterImage;