import React from 'react';
import possibilityImage from '../../assets/Community.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Business Case</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>Global handicrafts market-US$ 718 Bil (2020)</p>
      <br />
      <p>
        Growth: CAGR 11% (primary market) (businesswire - Barkshire Hathway
        company)
      </p>
      <p>Vibrant reselling/auction (Secondary market)-estimation is unknown.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
