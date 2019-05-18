import React, { Component, Fragment } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import ResumeInMD from './resumeMD';
import Nav from './nav';
// import CssPractice from './css-practice';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
              <BrowserRouter>
                  <Fragment>
                    <Route exact path={`/`} component={Home}/>
                    <Route exact path={'/about'} component={About}/>
                    <Route exact path={'/resume'} component={ResumeInMD}/>
                    {/* <Route exact path={'/css-practice'} component={CssPractice}/> */}
                  </Fragment>
              </BrowserRouter>
      </div>
    );
  }
}

export default App;
