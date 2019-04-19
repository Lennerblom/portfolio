import React, { Component } from 'react';
import { createRequireFromPath } from 'module';

let tierUrl = "https://tier-board.github.io/tier-board-client/";
let tierImage = "tier-board.png";
let masterMindUrl = "https://lennerblom.github.io/master-mind/";
let masterImage = 'mastermind.png';
let bitUrl = "https://bitfellows.github.io/client-side/";
let bitImage = 'bitfellows.png';
let calcUrl = "https://lennerblom.github.io/calculator/";
let calcImage = 'calculator.png';

export default class ProjectCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            view: true,
            projects: [
              {  url: tierUrl, image: tierImage, paragraph: 'tier board awesome' },
              {  url: masterMindUrl, image: masterImage, paragraph: 'super fun' },
              {  url: bitUrl, image: bitImage, paragraph: 'I didnt buy any' },
              {  url: calcUrl, image: calcImage, paragraph: 'need to make better' },

            ]
        }
    }


    render() {
        return (
            <div>
              <h2>Projects</h2>
              {this.state.projects.map(project => <a href={project.url}><div className='projectCard-container'><img className='projectCard-image' src={require(`./assets/${project.image}`)} alt='project link' width='375px' height='300px'></img><div className='projectCard-para'>{project.paragraph}</div></div></a>)}

            </div>
            
        );
    }
}