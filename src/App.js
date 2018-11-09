import React, { Component } from 'react';
//import logo from '../src/assets/logo.svg';
import classes from './App.css';
import Keyboard from './containers/Keyboard/Keyboard';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Keyboard/>
      </div>
    );
  }
}

export default App;
