import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
// import LinkedList from './link_list';


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
let StyledImage = styled.img`
  margin: 0 .5em 0 .5em auto;
  max-width: 90%;
  -webkit-transition: opacity 1s; /* For Safari 3.1 to 6.0 */
  transition: opacity 1s;
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
      //let root;
      if(this.head === null) {
        this.head = node;
        //this.head = new Node(val,img);
       // root = this.head;
      } else {
        node = this.head;
        while (node.next) {
          node = node.next;
        }
        node.next = new Node(val,img);
        //node.next.next = root;
      }
      return node.next;
    }
    reverse() {
      let current = this.head;
      if(!this.head) {return null;}
      else if(this.head.next === null) {
        return this.head;
      } else {
        while(current.next) {
          let save = current.next;
          current.next = this.previous;
          this.previous = current;
          current = save;
        }
        this.head = current;
        this.head.next = this.previous;
      }
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

//let count = 0;
let currentImage = tierImage;
let url = 'https://tier-board.github.io/tier-board-client/';

export default class Rotator extends Component {

        constructor(props){
            super(props);
            this.state = {
                view: true,
                checked: true,
            }
        };

        componentDidMount(){
           currentImage = list.head.image;
           return currentImage;
           
        }

        rotate = () => {

            // if(!list.next){
            //   list.head = list.previous.previous.previous;
            // } 
            // let move = () => {
            //   StyledImage = styled.img`
            //   transition: opacity 1s;
            //   opacity: .5;             
            //   `;
            //   this.setState({view: false});
            // }
            // setTimeout(move,0); 

          //  let change = () => {
          //   StyledImage = styled.img`
          //   transition: opacity 1s;
          //   opacity: .5;
          //   `;
           list.head = list.head.next;
           currentImage = list.head.image;
           console.log(currentImage, list.head.value, list.head.image);
           url = list.head.value;
           //count++;
          //  console.log('count: ',count);
          //  if(this.state.checked === false){
          //   this.setState({checked: true});
          //  // buttonText = 'return to game';
          // }
          // else{
          //   this.setState({checked: false});
          //   //buttonText = 'how to play'
          // }
           this.setState({view: false});
            


          //  }
          //  setTimeout(change,1000);

        }
        reverse = () => {
          let current = list.head;
      if(!list.head) {return null;}
      else if(list.head.next === null) {
        return list.head;
      } else {
        while(current.next) {
          let save = current.next;
          current.next = list.previous;
          list.previous = current;
          current = save;
        }
        list.head = current;
        list.head.next = list.previous;
      }
      currentImage = list.head.image;
      console.log(currentImage, list.head.value, list.head.image);
      url = list.head.value;



          // list.reverse(list);
          // console.log('previous',list.head.previous);
          // list.head = list.head.previous;
          // console.log('new head', list.head);

          //  currentImage = list.head.image;
          //  console.log(currentImage, list.head.value, list.head.image);
          //  url = list.head.value;
          // this.setState({view: false});
        }



        render() {
        return (
            <div>
                <h2>Projects</h2>
                {/* <Carousel defaultWait={1000}> */}
                  <Slide direction='right'  mountOnEnter > 
                    <div className="rotator">
                      <a href={url}>
                        <StyledImage src={require(`./assets/${currentImage}`)} alt="link to site" width="200px"/>
                      </a>
                    </div>
                   </Slide>
                {/* </Carousel> */}
                <button onClick={this.reverse}>Previous</button>
                <button onClick={this.rotate}>Next</button>
            </div>
        );
    }
}