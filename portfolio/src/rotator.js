import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 150px;
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: 150px;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const CarouselUI = ({ position, handleClick, children }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

class Node {
    constructor(url, image) {
      this.value = url;
      this.image = image;
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
    
    append(val,img){
      let node = new Node(val,img);
      if(this.head === null) {
        this.head = new Node(val,img);
      } else {
        node = this.head;
        while (node.next) {
          node = node.next;
        }
        node.next = new Node(val,img);
      }
      return node.next;
    }
}
let tierUrl = "https://tier-board.github.io/tier-board-client/";
let tierImage = "tier-board.png";
let masterMindUrl = "https://lennerblom.github.io/master-mind/";
let masterImage = 'mastermind.png';
let bitUrl = "https://bitfellows.github.io/client-side/";
let bitImage = 'bitfellows.png';
let calcUrl = "https://lennerblom.github.io/calculator/";
let calcImage = 'calculator.png';

let list = new LinkedList();
list.append(tierUrl, tierImage);
list.append(masterMindUrl, masterImage);
list.append(bitUrl, bitImage);
list.append(calcUrl, calcImage);

let count = 0;
let currentImage = 'MyFace.jpg';
let url = 'https://tier-board.github.io/tier-board-client/';

export default class Rotator extends Component {

        constructor(props){
            super(props);
            this.state = {
                view: true,
            }
        };

        rotate = () => {
           // if(list.next){
           list.head = list.head.next;
           //currentImage = list.head.image;
           console.log(currentImage, list.head.value, list.head.image);
           url = list.head.value;
           count++;
           console.log('count: ',count);
           this.setState({view: false}); 
            //}
            // if(!list.next){
            //     list.head = list.previous.previous.previous;
            // }  
        }


        render() {
        return (
            <div>
                <h2>Projects</h2>
                <Carousel /*defaultWait={1000} wait for 1000 milliseconds */>
                  <Slide right>
                    <div className="rotator">
                      <a href={url}>
                        <img src={require(`./assets/${list.head.image}`)} alt="link to site" width="150px"/>
                      </a>
                    </div>
                  </Slide>
                </Carousel>
                
                <button onClick={this.rotate}>Next</button>
            </div>
        );
    }
}