import './Research.css'
import image4 from '../images/countymap.png'
import image3 from '../images/code.png'
import image5 from '../images/platformer.png'
import image6 from '../images/exoplanets.png'
import image7 from '../images/consultingwebsite.jpg'
import image8 from '../images/donut.jpg'
import dorms from '../images/dorms.jpg'
import misinfo from '../images/misinfo.jpg'

import React from 'react';


const Projects = () => {
  return (
    <div className="project">
      <h1>What research have I done?</h1>
      <div className="project-grid">

      <div>
            <h3>MISINFORMATION DETECTION AI</h3>
            <p>I scraped Twitter for over 1200 tweets regarding controversial topics that potentially contain misinformation or trolling, labeled them as misinformation and/or trolling with a team of coders, and created a codebook to keep our standards of coding consistent. In collaboration with <a href='https://www.linkedin.com/in/yuhong-liu-02537b22/' target="_blank" rel="noopener noreferrer">Dr. Liu</a> and <a href='https://www.linkedin.com/in/hooria/' target="_blank" rel="noopener noreferrer">Dr. Jazaieri</a>, as well as students majoring in psychology, business, and computer science, I worked to construct training datasets for machine learning models.</p>

            <img src={misinfo} className='project-grid-img' alt="usmap" />
        </div>

        <div>
            <h3>AR/VR RESEARCH AND DEVELOPMENT</h3>
            <p>I collaborated with <a href='https://www.linkedin.com/in/klukoff/' target="_blank" rel="noopener noreferrer">Dr. Lukoff</a> and a senior design team to create a <a href='https://scudormtours.vercel.app/' target="_blank" rel="noopener noreferrer">digital twin</a> of university dorms using virtual reality. Guiding our work using Agile Scrum methodology, we implemented Matterport SDK with Javascript to make 10 3D virtual scans available to prospective students. I presented the project to the <a href='https://investors.matterport.com/corporate-governance/management' target="_blank" rel="noopener noreferrer">Matterport Executive Board</a> and answered their questions, effectively establishing a relationship between Matterport and SCU.</p>

            <img src={dorms} className='project-grid-img' alt="usmap" />
        </div>

        <div>
            <h3>BELLWETHER CLASSIFICATION MODELS</h3>
            <p>In 2021, I led a team of 6 ambitious researchers under <a href='https://www.linkedin.com/in/philmui/' target="_blank" rel="noopener noreferrer">Dr. Mui</a> to study the statistical significance of bellwether counties in US presidential elections from 2000-2022. Bellwether counties are counties that have consistently voted in favor of the winning presidential candidate every election cycle. Since only one bellwether remains, our group trained 3 machine learning classifiers on 531486 county-level data points in order to find out what attributes make bellwethers stand out. You can read the rest of our publication at the <a href='https://static1.squarespace.com/static/5fa95df956e953688e53a817/t/61c23da2a32f1f5cc4e3f592/1640119719012/Seriatim+Journal+Fall+2021.pdf' target="_blank" rel="noopener noreferrer">Seriatim Journal of American Politics</a>.</p>

            <img src={image4} className='project-grid-img' alt="usmap" />
        </div>

        <div>
            <h3>EXOPLANET DATA MINING</h3>
            <p>In one of my first computer science projects, I led 5 other team members in creating the Comprehensive Habitability Index (CHI) for evaluating the eccentricity, habitable zone, and atmospheric similarity of exoplanets to that of Earth. Computing this CHI required extensive planet habitability research, parsing through NASA's exoplanet archive, and using a general understanding of astrophysics and chemistry to mathematically compute various indicators of habitability. Our research paper can be found <a href='https://drive.google.com/file/d/1H81uODt8P8_l3DuHJvFaUk82Y-yp0mXH/view' target="_blank" rel="noopener noreferrer">here</a>.</p>

            <img src={image6} className='project-grid-img' alt="exoplanets" />
        </div>
        
      </div>
    </div>
  );
};

export default Projects;