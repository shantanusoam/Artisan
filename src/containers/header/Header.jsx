import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/Ai0.png';

import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        We are a web3 protocol building an exclusive platform for indegenous
        artisans from India
      </h1>
      <p>
        ArtisanDAO connects Indian indegenous artisans with patrons across the
        world by presenting their verified works as NFTs in popular NFT
        marketplaces Our DAO comes with long-term roadmap of long term benefits
        both for the patrons and a back-linkage with the artisans for passing on
        of DAO benefits
      </p>

      {/* <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Thousands of Artist with hundreds of year family experience</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
