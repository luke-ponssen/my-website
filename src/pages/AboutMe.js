import React from 'react';
import './AboutMe.css';
import akp from '../images/akp.png'
import student from '../images/student.png'
import swimmer from '../images/swimmer.png'
import musician from '../images/piano.png'
import solver from '../images/inrix.jpg'
import engineer from '../images/engineer.png'
import reader from '../images/read.png'
import sailor from '../images/sailing.jpg'
import lego from '../images/lego.jpg'
import snow from '../images/snow.jpg'

function AboutMe() {
return (
    <div className="about-me">
      <h1>Who am I?</h1>
      <div className="about-me-grid">
      <div>
            <h3>I'm an adventurer</h3>
            <img src={sailor} className="about-me-img" alt="sailor" />
        </div>
        <div>
            <h3>I'm a 3D modeler</h3>
            <img src={lego} className="about-me-img" alt="modeler" />
        </div>
        <div>
            <h3>I'm an athlete</h3>
            <img src={swimmer} className="about-me-img" alt="swimmer" />
        </div>
        <div>
            <h3>I'm a problem-solver</h3>
            <img src={solver} className="about-me-img" alt="solver" />
        </div>
        <div>
            <h3>I'm an engineer</h3>
            <img src={engineer} className="about-me-img" alt="engineer" />
        </div>
        <div>
            <h3>I'm a lifelong learner</h3>
            <img src={reader} className="about-me-img" alt="reader" />
        </div>
        <div>
            <h3>I'm a musician</h3>
            <img src={musician} className="about-me-img" alt="musician" />
        </div>
        <div>
            <h3>I'm a student</h3>
            <img src={student} className="about-me-img" alt="Student" />
        </div>
        <div>
            <h3>I'm a friend</h3>
            <img src={snow} className="about-me-img" alt="snow" />
        </div>
      </div>
    </div>
);
}

export default AboutMe;