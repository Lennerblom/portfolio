import React, { Component } from 'react';

let tierUrl = "https://tier-board.github.io/tier-board-client/";
let tierImage = "tier-board.png";
let tierPara = 'This full stack app is built with a NodeJS/express server, MongoDB, and React and Redux on the front end.'
let masterMindUrl = "https://lennerblom.github.io/master-mind/";
let masterImage = 'mastermind.png';
let masterPara = 'Mastermind is a classic logic game that I grew up playing.  I recreated my own version of the game using ReactJS.';
let bitUrl = "https://bitfellows.github.io/client-side/";
let bitImage = 'bitfellows.png';
let bitPara = 'Full stack app useing JavaScript, HTML, CSS and postgreSQL pulling from a couple API\'s to display current crypto prices.'
let calcUrl = "https://lennerblom.github.io/calculator/";
let calcImage = 'calculator.png';
let calcPara = 'These calculators were built with ReactJS and CSS.  I used different grid techniques to layout the buttons, including CSS grid '

export default class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: true,
            projects: [
              {  url: tierUrl, image: tierImage, paragraph: tierPara },
              {  url: masterMindUrl, image: masterImage, paragraph: masterPara },
              {  url: bitUrl, image: bitImage, paragraph: bitPara },
              {  url: calcUrl, image: calcImage, paragraph: calcPara },
            ]
        }
    }

    render() {
        return (
            <div>
              <h2 className='projectSection-label'>Projects</h2>
              {this.state.projects.map(project => 
                <a href={project.url}>
                  <div className='projectCard-container'>
                  <img className='projectCard-image' src={require(`./assets/${project.image}`)} alt='project link'></img>
                  <div className='projectCard-para'>{project.paragraph}</div></div>
                </a>)
              }
            </div>
            
        );
    }
}