import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';

class App extends Component {
  render() {
    return (
      <div className="App">
              <BrowserRouter>
                  <Fragment>
                    <Route exact path={`/`} component={Home}/>
                    <Route exact path={'/about'} component={About}/>
                  </Fragment>
              </BrowserRouter>
      </div>
    );
  }
}

export default App;
