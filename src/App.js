import React, { Component } from 'react';
import { Route, Switch,Redirect} from 'react-router-dom';

//import logo from '../src/assets/logo.svg';

import Keyboard from './containers/Keyboard/Keyboard';
import MainPage from './containers/GamePage/MainPage';

class App extends Component {
  render() {
    return (
       <div>
        <Switch>
           <Route path="/hangout/:id"  component={Keyboard}/>
           <Route path="/" exact component={MainPage}/>
           <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
