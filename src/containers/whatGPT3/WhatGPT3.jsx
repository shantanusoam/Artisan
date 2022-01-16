import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is ArtisanDAO"
        text="ArtisanDAO is a Web3 marketplace made exclusively for indigenous artists to promote and sell their art in the form of NFTs
        Every NFT will come with a curated documentation of the artist, their art heritage, their contact details through which patrons can get in touch with the artist
        The web3 native community formed around the DAO will get  exlcusive benefits from owning the NFTs leading to them becoming evangelist and marketers for the indigenous artisans, promoting their century-old art form across the world.
        Being a patron at ArtisanDAO and owning a ArtisanDAO marketplace NFT will add social capital to the work of local artisans
        .Once the protocol is active in one country, it can be easily replicated across other countries as the DAO is an opensource protocol, with permissionless governance built-in.

"
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">What Problem Are We Solving?</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Supply Side Constraint"
        text="Artisan Community prospered in the past due to patronage from Royal Courts.Lack of a constant patronage in the modern world is leading to indigenous art and crafts slowly dying out due to lack of distribution and market connect"
      />
      <Feature
        title="Demand Side Constraint:"
        text="Purchase of the work of local artisan has no resale value, hence not seen as an investment
        It’s hard for buyers to verify the authenticity of the work
        Lack of high quality images of indegenous arts which can be printed on utility products like t-shirts and mugs


        "
      />
      <Feature
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />
    </div>
  </div>
);

export default WhatGPT3;
