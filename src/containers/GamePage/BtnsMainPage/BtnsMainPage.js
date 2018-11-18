import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './BtnsMainPage.css';


class BtnsMainPage extends Component{
    render(){
        return(
            <div className={classes.BtnMainPage}>
            <Link to={{pathname:'/hangout/8',search:'?easy'}} className={classes.Link}>ЛЕСНО</Link>
            <Link to={{pathname:'/hangout/6',search:'?medium'}} className={classes.LinkMedium}>МАЛКУ ПОТЕШКО</Link>
            <Link to={{pathname:'/hangout/4',search:'?hard'}}  className={classes.Link}>ТЕШКО</Link>
            </div>
        )
    }
}

export default BtnsMainPage;