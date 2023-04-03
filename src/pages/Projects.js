import './Projects.css'
import image4 from '../images/countymap.png'
import image3 from '../images/code.png'
import image5 from '../images/platformer.png'
import image6 from '../images/exoplanets.png'

import React from 'react';


const Projects = () => {
  return (
    <div className="project">
      <h1>What projects have I done?</h1>
      <div className="project-grid">

        <div>
            <h3>THIS WEBSITE</h3>
            <p>Making this website has challenged me to learn Javascript and CSS from scratch. Starting with the basic tutorial videos, I've quickly learned how to create buttons, navigate to different pages, create animations, outline the structure of various webpages, and style my website using gradients. I've enjoyed the intellectual creativity and freedom in being able to construct and design each aspect of this website, as well as add in unique features such as the automated typing on the homepage or the personalization of the About Me section using photos and cards.</p>

            <img src={image3} className='project-grid-img' alt="code-ss" />
        </div>

        <div>
            <h3>BELLWETHER CLASSIFICATION MODELS</h3>
            <p>In 2021, I led a team of 6 ambitious researchers to study the statistical significance of bellwether counties in US presidential elections from 2000-2022. Bellwether counties are counties that have consistently voted in favor of the winning presidential candidate every election cycle. Since only one bellwether remains, our group trained 3 machine learning classifiers on 531486 county-level data points in order to find out what attributes make bellwethers stand out. You can read the rest of our publication at the Seriatim Journal of American Politics <a href='https://static1.squarespace.com/static/5fa95df956e953688e53a817/t/61c23da2a32f1f5cc4e3f592/1640119719012/Seriatim+Journal+Fall+2021.pdf'>here</a>.</p>

            <img src={image4} className='project-grid-img' alt="usmap" />
        </div>

        <div>
            <h3>PLATFORMER VIDEO GAME</h3>
            <p>Inspired by my favorite childhood video game, Super Mario Bros 2, I created a 2-dimensional platformer game using Java and Processing. I hard-coded the game fundamentals--gravity, player jumping and crouching, moving enemies, collectable coins, platform detection, collision detection, and map generation--and added some of my own unqiue designs, including a crouch-jump super power that lets you jump up to 2x your original max jump height or a secret passage that grants the player plenty of extra coins.</p>

            <img src={image5} className='project-grid-img' alt="platformer"/>
        </div>

        <div>
            <h3>EXOPLANET DATA MINING</h3>
            <p>In one of my first computer science projects, I led 5 other team members in creating the Comprehensive Habitability Index (CHI) for evaluating the eccentricity, habitable zone, and atmospheric similarity of exoplanets to that of Earth. Computing this CHI required extensive planet habitability research, parsing through NASA's exoplanet archive, and using a general understanding of astrophysics and chemistry to mathematically compute various indicators of habitability. Our research paper can be found <a href='https://drive.google.com/file/d/1H81uODt8P8_l3DuHJvFaUk82Y-yp0mXH/view'>here</a>.</p>

            <img src={image6} className='project-grid-img' alt="exoplanets" />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;