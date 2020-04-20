import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './css/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
          </Switch>
      </div>
    );
    }
}

export default App;
