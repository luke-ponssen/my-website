import './Projects.css'
import image4 from '../images/countymap.png'
import image3 from '../images/code.png'
import image5 from '../images/platformer.png'
import image6 from '../images/exoplanets.png'
import image7 from '../images/consultingwebsite.jpg'
import image8 from '../images/donut.jpg'

import React from 'react';


const Projects = () => {
  return (
    <div className="project">
      <h1>What projects have I done?</h1>
      <div className="project-grid">

        <div>
            <h3>PORTFOLIO IN SPACE</h3>
            <p>Inpsired to make a more interactive portfolio, I challenged myself and used the Three JS library to showcase my projects. The theme of this alternate portfolio would be outerspace and at the center of the portfolio tour I animated the black "Everything Bagel" from one of my favorite movies Everything Everywhere All At Once. I've thoroughly enjoyed constructing this one-of-a-kind portfolio and continue to add more fun details, such as a moon that rotates everytime the user scrolls. Embark on an awesome adventure as you scroll through <a href="https://luke-ponssen.github.io/portfolio" target="_blank" rel="noopener noreferrer">my portfolio</a> in outer space!</p>

            <img src={image8} className='project-grid-img' alt="donut" />
        </div>

        <div>
            <h3>REACT JS WEBSITE</h3>
            <p>Making this website has challenged me to learn Javascript and CSS from scratch. Starting with the basic tutorial videos, I've quickly learned how to create buttons, navigate to different pages, create animations, outline the structure of various webpages, and style my website using gradients. I've enjoyed the intellectual creativity and freedom in being able to construct and design each aspect of this website, as well as add in unique features such as the automated typing on the homepage or the personalization of the About Me section using photos and cards.</p>

            <img src={image3} className='project-grid-img' alt="code-ss" />
        </div>

        <div>
            <h3>VANILLA HTML WEBSITE</h3>
            <p>After creating my first website, I went on to build more websites for myself, for friends, and for clients. <a href='https://luke-ponssen.github.io/consulting/#home' target="_blank" rel="noopener noreferrer">This</a> is one website that I built that I am particularly proud of. I coded mostly in HTML and CSS for this one, and I enjoyed the challenges that came with implementing a background with a transparent navigation bar, using Swiper JS to switch back and forth between reviews, and creating a booking form at the bottom of the website. Overall, I had fun experimenting with the various features I could implement.</p>

            <img src={image7} className='project-grid-img' alt="consulting" />
        </div>

        <div>
            <h3>PLATFORMER VIDEO GAME</h3>
            <p>Inspired by my favorite childhood video game, Super Mario Bros 2, I created a 2-dimensional platformer game using Java and Processing. I hard-coded the game fundamentals--gravity, player jumping and crouching, moving enemies, collectable coins, platform detection, collision detection, and map generation--and added some of my own unqiue designs, including a crouch-jump super power that lets you jump up to 2x your original max jump height or a secret passage that grants the player plenty of extra coins. Check out the <a href="https://github.com/luke-ponssen/Platformer-Video-Game" target="_blank" rel="noopener noreferrer">source code</a>.</p>

            <img src={image5} className='project-grid-img' alt="platformer"/>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;