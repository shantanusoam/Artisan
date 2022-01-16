import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '1. Building Community',
    text: 'Building Community of Patrons',
  },
  {
    title: '2.Formation of DAO',
    text: 'Decentralized Autonomous Organization',
  },
  {
    title: '3.NFT Launch    ',
    text: 'Launching NFTs for the community    ',
  },
  {
    title: '4.Fundraising    ',
    text: 'Fundraising activities and premium memberships    ',
  },
  {
    title: '5.Exhibition of Art    ',
    text: 'Establishing Exhibition Centers on Metaverse and Physical world    ',
  },
  {
    title: '6.Community Outreach',
    text: 'Exclusive Offerings for the community',
  },
  {
    title: '7.Globalization of the concept',
    text: 'Enabling Global ArtIsans    ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Our Vision is to Creating a thriving demand in the NFT marketplace for
        work of indegenous artisans
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
