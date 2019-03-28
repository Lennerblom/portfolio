import React, { Component, Fragment }  from 'react';
import './styles/practice.scss';
import Rotator from './rotator';
export default class Home extends Component {
    render(){
        return(
            <Fragment>
                 <nav>
            <ul>
              <li className="nav"><a href="/">home</a></li>
              <li className="nav"><a href="/about">about</a></li>
              <li className="nav"><a href="https://gist.github.com/Lennerblom/bd99389a3f6201a19e7caf741a26f0c8">resume</a></li>
            </ul>
          </nav>
                <img src={require('./assets/MyFace.jpg') } alt="my face" width="300px"/>
                <div class="container projects">
                <Rotator/>
                  {/* <div class="row">
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
                    <div class="column3">
                      <a href="https://lennerblom.github.io/calculator/">
                        <img src={require('./assets/calculator.png')} alt="link to my calculator" width="150px"/> 
                      </a>
                    </div>
                  </div> */}
                </div>
            </Fragment>
        )
    }
}