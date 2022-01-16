import React from 'react';

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
import Story from './components/Story/story';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      +
      <Navbar />
      <Header />
    </div>
    <Story></Story>
    {/* <Brand /> */}
    <WhatGPT3 />
    <Features />
    <Possibility />
    {/* <CTA /> */}
    <Blog />
    {/* <Footer /> */}
  </div>
);

export default App;
