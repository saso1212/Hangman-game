import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './BtnsMainPage.css';
import Button from '../../../components/UI/Buttons/Button';

class BtnsMainPage extends Component{
    render(){
        return(
            <div className={classes.BtnMainPage}>
            <Button btnType='Danger'> <NavLink to="/hangpage/7?zivotni">LESNO</NavLink></Button>
            </div>
        )
    }
}

export default BtnsMainPage;