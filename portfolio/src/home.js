import React, { Component, Fragment }  from 'react';

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
                <div class="projects">
                  <div class="row">
                    <div class="column">
                      <a href="https://tier-board.github.io/tier-board-client/">
                        <img src={require('./assets/tier-board.png')} alt="link to tier-board site" width="150px"/>
                      </a>
                    </div>
                    <div class="column">
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