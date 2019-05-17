import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        return (
            <nav>
            <ul>
              <li className="nav"><a href="/">Home</a></li>
              <li className="nav"><a href="/about">About</a></li>
              <li className="nav"><a href="/resume">Resume</a></li>
            </ul>
          </nav>
        );
    }
}