import React, { Component } from 'react';
import './styles/practice.css';

export default class CssPractice extends Component {
    render() {
        return (
            <div class="container">
              <div class="row">
                <div class="column1">
                  <h4>Tier Board</h4>
                  <a href="https://tier-board.github.io/tier-board-client/">
                    <img src={require('./assets/tier-board.png')} alt="link to tier-board site" width="150px"/>
                  </a>
                </div>
                <div class="column2">
                  <h4>Bitfellows</h4>
                  <a href="https://bitfellows.github.io/client-side/">
                    <img src={require('./assets/bitfellows.png')} alt="link to bitfellows site" width="150px"/> 
                  </a>
                </div>
              </div>
            </div>
        );
    }
}