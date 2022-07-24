import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, WhatNextensio, Header } from './containers';
import { CTA, Brand, NavBar } from './components';

const App = () => {
  return (
    <div className="App">
      {/*Universal skeleton layout for the entire webpage*/}
        <div className="gradient__bg">
          <NavBar />
        </div>
          <Header />
          <Brand />
          <WhatNextensio />
          <Features />
          <Possibility />
          <Blog />
          <CTA />
          <Footer />
    </div>
  )
}

export default App