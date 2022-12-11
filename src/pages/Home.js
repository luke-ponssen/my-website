import image1 from '../images/image1.png';

import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-grid">
        <div>
            <h1>Welcome to Luke's Portfolio</h1>
        </div>
        <div>
            <img src={image1} className="home-image" alt="pfp" />
        </div>
      </div>
    </div>
  );
}

export default Home;