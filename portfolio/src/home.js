import React, { Component, Fragment }  from 'react';
import './styles/practice.css';
export default class Home extends Component {
    render(){
        return(
            <Fragment>
                 <nav>
            <ul>
              <li className="nav"><a href="/">home</a></li>
              <li className="nav"><a href="/about">about</a></li>
            </ul>
          </nav>
                <img src={require('./assets/MyFace.jpg') } alt="my face" width="300px"/>
                <div class="container projects">
                  <div class="row">
                    <div class="column1">
                      <a href="https://tier-board.github.io/tier-board-client/">
                        <img src={require('./assets/tier-board.png')} alt="link to tier-board site" width="150px"/>
                      </a>
                    </div>
                    <div class="column2">
                      <a href="https://bitfellows.github.io/client-side/">
                        <img src={require('./assets/bitfellows.png')} alt="link to bitfellows site" width="150px"/> 
                      </a>
                    </div>
                  </div>
                </div>
            </Fragment>
        )
    }
}