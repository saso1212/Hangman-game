import React from 'react';
import classes from './HangOut.css';
//import Button from '../../components/UI/Buttons/Button';

const mainPage =(props)=>{
        return(
            <div className={classes.MainPage}>
              <div className={classes.Left}></div>
              <div className={classes.Top}></div>
              <div className={classes.Right}>
              <h1>{props.children}</h1>
              </div>
            </div>
        )
    }


export default mainPage;