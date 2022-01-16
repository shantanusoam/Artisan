import React from 'react';

import './story.css';
import past from '../../assets/Past.jpg';
import present from '../../assets/present.png';
import futre from '../../assets/Crowd.png';
import Fade from 'react-reveal/Fade';
const Story = () => (
  <div className="gpt3__story " id="story">
    <div className="gpt3__story-content">
      <h4>Story</h4>
      <Fade left>
        <img src={past} alt="" />
      </Fade>

      <h1 className="gradient__text">Past</h1>
      <Fade right>
        <img src={present} alt="" />
      </Fade>

      <h1 className="gradient__text">Present</h1>
      <Fade left>
        <img src={futre} alt="" />
      </Fade>

      <h1 className="gradient__text">Future</h1>
    </div>
  </div>
);

export default Story;
