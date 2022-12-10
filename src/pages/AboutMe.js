import React from 'react';
import './AboutMe.css';
import akp from '../images/akp.png'
import student from '../images/student.png'
import swimmer from '../images/swimmer.png'

function AboutMe() {
return (
    <div className="about-me">
      <h1>Who am I?</h1>
      <div className="about-me-grid">
        <div>
            <h3>I'm a brother of AKPsi</h3>
            <img src={akp} alt="akp" />
        </div>
        <div>
            <h3>I'm a student</h3>
            <img src={student} alt="Student" />
        </div>
        <div>
            <h3>I'm a swimmer</h3>
            <img src={swimmer} alt="swimmer" />
        </div>
      </div>
    </div>
);
}

export default AboutMe;