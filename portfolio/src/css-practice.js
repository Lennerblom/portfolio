import React, { Component } from 'react';
import './styles/practice.css';

export default class CssPractice extends Component {
    render() {
        return (
            <div class="container">
              <div class="row">
                <div class="column">
                <a href="https://bitfellows.github.io/client-side/">
                  <img src={require('./assets/bitfellows.png')} alt="link to bitfellows site" width="150px"/> 
                </a>
                </div>
                <div class="column">
                <a href="https://bitfellows.github.io/client-side/">
                  <img src={require('./assets/bitfellows.png')} alt="link to bitfellows site" width="150px"/> 
                </a>
                </div>
              </div>
            </div>
        );
    }
}