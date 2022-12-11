import './Projects.css'
import image4 from '../images/countymap.png'
import image3 from '../images/code.png'
import image5 from '../images/platformer.png'

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
            <img src={image3} className='project-grid-img' alt="code-ss" />
        </div>
        <div>
            <img src={image4} className='project-grid-img' alt="usmap" />
        </div>
        <div>
            <h3>BELLWETHER CLASSIFICATION MODELS</h3>
            <p>In 2021, I led a team of 6 ambitious researchers to study the statistical significance of bellwether counties in US presidential elections from 2000-2022. We trained 3 machine learning classifiers on 531486 data points. You can read the rest of our publicaiton at the Seriatim Journal of American Politics <a href='https://static1.squarespace.com/static/5fa95df956e953688e53a817/t/61c23da2a32f1f5cc4e3f592/1640119719012/Seriatim+Journal+Fall+2021.pdf'>here</a>.</p>
        </div>
        <div>
            <h3>PLATFORMER VIDEO GAME</h3>
            <p>Inspired by my favorite childhood video game, Super Mario Bros 2, I created a 2-dimensional platformer game using Java and Processing. In addition to the usual aspects of the game--gravity, jumping, enemies, collecting coins, platform detection, collision detection--I added some of my own spins, including a crouch-jump super power that lets you jump up to 2x your original max jump height.</p>
        </div>
        <div>
            <img src={image5} className='project-grid-img' alt="platformer"/>
        </div>
      </div>
    </div>
  );
};

export default Projects;