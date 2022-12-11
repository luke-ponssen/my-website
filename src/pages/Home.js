import image1 from '../images/image1.png';

import React from 'react';
import { useEffect, useRef } from 'react';
import './Home.css';
import Typed from 'typed.js';

function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:["Feel free to explore its pages.",
      "Greetings from Luke.",
      "I heard the About Me section is <strong>REALLLLLY</strong> interesting.",
      "<i>I am your father!!!</i>",
      "You've gotten this far...^2000 you should hire me :)",],
      startDelay: 1000,
      typeSpeed: 50,
      backDelay: 4000,
      backSpeed: 25,
      smartBackspace: true,
      showCursor: true,
      loop: false,
    })
  })

  return (
    <>
    <div className="home">
      <div className="home-grid">
        <div className="home-content">
            <h1>Welcome to My Portfolio</h1>
            <p><span ref={el}></span></p>
        </div>
        <div>
            <img src={image1} className="home-image" alt="pfp" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;