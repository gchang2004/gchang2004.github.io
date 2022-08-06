import React from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, WhatNextensio, Header } from './containers';
import { CTA, Brand, NavBar } from './components';
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App" >
      {/*Website TAB Description*/}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nextensio | Your Cloud Extension </title>
        <link rel="canonical" href="https://nextensio.io/" />
        <meta name="description" content="© 2022 Nextensio Inc. All rights reserved." />
      </Helmet>

      {/*Universal skeleton layout for the entire webpage*/}
        <NavBar />
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