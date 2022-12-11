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
      "I heard the About Me section is REALLLLLY interesting.",
      "Knock-knock...^1000 Who's there?^1000.^1000.^1000.^8000 Haha are you still waiting??",
      "I am your father!!!",
      "<i>Pause</i> and take a look at the <strong>POWER</strong>^1000 I^1000 can^1000 control.",
      "You should hire me :)",],
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