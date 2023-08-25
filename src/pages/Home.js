import image1 from '../images/image1.png';
import pfp from '../images/pfp2.png';

import React from 'react';
import { useEffect, useRef } from 'react';
import './Home.css';
import Typed from 'typed.js';

function Home() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:[
      "You've gotten this far...^2000 you should hire me :)",],
      startDelay: 1000,
      typeSpeed: 50,
      backDelay: 6000,
      backSpeed: 15,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    })
  })

  return (
    <div className="home">
      <div className="home-grid">
        <div className="home-content">
            <h1>Welcome to My Portfolio</h1>
            <p><span ref={el}></span></p>
        </div>
        <div class="circle-image">
          <img src={pfp} alt="circle image"/>
        </div>
      </div>
    </div>
  ); 
}

export default Home;