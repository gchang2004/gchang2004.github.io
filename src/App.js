import React, { createContext, useState } from 'react';
import './App.css';
import { Footer, Blog, Possibility, Features, WhatNextensio, Header, Banner } from './containers';
import { CTA, Brand, NavBar } from './components';
import { Helmet } from "react-helmet";

export const ThemeContext = createContext("null");

const App = () => {
  /*Toggle between banner states*/
  const [toggleBanner, setToggleBanner] = useState(true);

  /*Light/Dark Mode toggle action*/
  const [theme, setTheme] = useState("light");

  /*Light/Dark Mode logic to switch between modes*/
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme} >
        {/*Website TAB Description*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Nextensio | Your Cloud Extension </title>
          <link rel="canonical" href="https://nextensio.io/" />
          <meta name="description" content="Copyright © 2022 Nextensio Inc. All rights reserved." />
        </Helmet>

        {/*Universal skeleton layout for the entire webpage*/}
        <Banner toggler={toggleTheme} themeOutput={theme === "dark"} status={theme} trigger={toggleBanner} setTrigger={setToggleBanner}/>
        <NavBar toggler={toggleTheme} themeOutput={theme === "dark"} status={theme}/> 
        <Header />
        <Brand />
        <WhatNextensio />
        <Features />
        <Possibility />
        <Blog />
        <CTA />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App