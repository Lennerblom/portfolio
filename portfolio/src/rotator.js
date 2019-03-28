import React, { Component } from 'react';

class Node {
    constructor(url, image) {
      this.value = {url,image};
      this.next = null;
      this.previous = null;
    }
  }
class LinkedList {
    
    constructor(val) {
      this.head = null;
      this.value = val;
      this.next = null;
    }
    
    append(val){
      let node = new Node(val);
      if(this.head === null) {
        this.head = new Node(val);
      } else {
        node = this.head;
        while (node.next) {
          node = node.next;
        }
        node.next = new Node(val);
      }
      return node.next;
    }
}
let tierUrl = "https://tier-board.github.io/tier-board-client/";
let tierImage = "https://tier-board.github.io/tier-board-client/";
let masterMindUrl = "https://lennerblom.github/master-mind/#/";
let bitUrl = "https://bitfellows.github.io/client-side/";
let bitImage = './assets/bitfellows.png';
let calcUrl = "https://lennerblom.github.io/calculator/";
let calcImage = './assets/calculator.png';

let list = new LinkedList();
list.append(tierUrl, tierImage);
list.append(bitUrl, bitImage);
list.append(calcUrl, calcImage);
list.append(masterMindUrl);

let currentImage;
export default class Rotator extends Component {

        // Constructor(props){
        //     super(props);
        //     this.state = {
        //         view: true,
        //     }
        // };

        rotate = () => {
           list.head = list.head.next;
           currentImage = list.head.value.image;
           return list.head.value;
        }
        render() {
        return (
            <div>
                <h2>Rotator</h2>
                <div class="rotator">
                      <a href={list.head.value.url}>{currentImage}
                        {/* <img src={require({currentImage})} alt="link to site" width="150px"/> */}
                      </a>
                </div>
                <button onClick={this.rotate}>Next</button>
            </div>
        );
    }
}