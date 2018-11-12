import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
//import logo from '../src/assets/logo.svg';
import classes from './App.css';
import Keyboard from './containers/Keyboard/Keyboard';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Switch>
            <Route path="/" exact component={Keyboard}/>
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
