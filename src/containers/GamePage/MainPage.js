import React ,{Component} from 'react';
import classes from './MainPage.css';
//import Button from '../../components/UI/Buttons/Button';

class MainPage extends Component{
    render()
    {
        return(
            <div className={classes.MainPage}>
              <div className={classes.Left}></div>
              <div className={classes.Top}></div>
              <div className={classes.Right}>
              <h1>22</h1>
              </div>
            </div>
        )
    }
}

export default MainPage;

