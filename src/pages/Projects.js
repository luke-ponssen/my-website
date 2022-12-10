import './Projects.css'
import image4 from '../images/shapplot.png'
import image3 from '../images/code-ss.png'

import React from 'react';


const Projects = () => {
  return (
    <div className="project">
      <h1>What projects have I done?</h1>
      <div className="project-grid">
        <div>
            <h3>THIS WEBSITE</h3>
            <p>Making this website has challenged me to learn Javascript and CSS from scratch. Starting with the basic tutorial video, I've been able to fully utilize the skills and knowledge I've accumulated and manipulate the code to my advantage. I enjoyed the freedom I've had with the design colors, layout, structure, and features.</p>
        </div>
        <div>
            <img src={image3} alt="code-ss" />
        </div>
        <div>
            <h3>BELLWETHER CLASSIFICATION MODELS</h3>
            <p>In 2021, I led a team of 6 ambitious researchers to study the statistical significance of bellwether counties in US presidential elections from 2000-2022. We trained 3 machine learning classifiers on 531486 data points. You can read the rest of our publicaiton <a href='/'>here</a>.</p>
        </div>
        <div>
            <img src={image4} alt="shapplot" />
        </div>
      </div>
    </div>
  );
};

export default Projects;