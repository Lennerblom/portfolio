import React, { Component, Fragment }  from 'react';
import './styles/practice.scss';
//import Rotator from './rotator';
import ProjectCard from './projectCard';
import Intro from './intro-paragraph';
import ResumeInMD from './resumeMD';
import Nav from './nav';

export default class Home extends Component {
    render(){
        return(
            <Fragment>
              <header title='Michael Lennerblom Portfolio'/>
              <div className='intro-container'>
                <img className='face-image' src={require('./assets/MyFace(1).jpg') } alt="my face" width="300px"/>
                <Intro/>
              </div>
                <div className="container projects">
                <ProjectCard/>
                </div>
            </Fragment>
        )
    }
}