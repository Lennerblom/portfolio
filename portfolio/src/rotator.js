import React, { Component } from 'react';
import List from './List'; //need to pull in a linked list


export default class Rotator extends Component {
    render() {
        Constructor(props){
            super(props);
            this.state = {
                view: true,
            }
        };

        rotate = () => {
            let list = new List();

        }
        return (
            <div>
                <h2>Rotator</h2>
            </div>
        );
    }
}