import React, { useState } from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine, RiUser3Line, RiArrowRightSLine } from 'react-icons/ri';
import logo from '../../assets/logos/logo.PNG';

const Menu = () => (
  <>
  {/*Menu Options for TOP NavBar*/}
  <p>
    <a href='#whatNextensio'>About</a>
  </p>
  <p><a href='#features'>Solutions</a></p>
  <p><a href='#possibility'>Pricing</a></p>
  <p><a href='#blog'>Explore</a></p>
  </>
)

const MenuButton = () => (
  <>
  {/*Menu Options for Side NavBar*/}
  <a href='#whatNextensio'>
    <button type="button">About</button>
      <RiArrowRightSLine
        color="#D155D5"
        size={27}
      />
  </a>
  <a href='#features'><button type="button">Solutions</button><RiArrowRightSLine color="#D155D5" size={27}/></a>
  <a href='#possibility'><button>Pricing</button><RiArrowRightSLine color="#D155D5" size={27}/></a>
  <a href='#blog'><button>Explore</button><RiArrowRightSLine color="#D155D5" size={27}/></a>
  </>
)

//Naming Convention ==> Block Element Modifier (BEM)
const NavBar = () => {
  //Introducing toggle action to menu bar
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    /*Navbar main skeleton*/
    <div className="nextensio__navbar" id="home">
        {/* logo features */}
        <div className="nextensio__navbar-links_logo">
            <a href="https://nextensio.io/"><img src={logo} alt="logo"/></a>
        </div>

      <div className="nextensio__navbar-links_spacing">
        {/* Menu bar features */}
        <div className="nextensio__navbar-links_container">
            <Menu />
        </div>
      </div>
        
        {/* Sign In + Contact Us features */}
        <div className='nextensio__navbar-contact'>
          {/* Login portal => button as ICON */}
          <a href="https://login.nextensio.net/">
            <RiUser3Line size={25}/>
          </a>
          <button type="button">Contact Us</button>
        </div>

        {/* Mobile format for menu-dropdown icon */}
        <div className='nextensio__navbar-menu'>
          {/* Logic statement for menu-dropdown icon */}
          {toggleMenu
            ? <RiMenuLine
              color="#ffffff"
              size={27}/>
            :<RiMenuLine
              color= "#aaa"
              size={27}
              onClick={() => setToggleMenu(true)}/>
          }
        </div>

        {/* What the menu looks like when clicked! */}
        {toggleMenu && (
          <div className='nextensio__navbar-menu_container slide-in-right' id="menubar">
            <div className='nextensio__navbar-menu_container-links'>
              {/*Menu buttons*/}
              <div className='nextensio__navbar-menu_container-icons'>
                <RiCloseLine
                    color="#aaa"
                    size={32}
                    onClick={() => setToggleMenu(false)}/>
              </div>
              <MenuButton />
              
              {/*Gradient bar divider*/}
              <div className="nextensio__navbar-menu_container-gradient-bar">
                <div />
              </div>

              {/* Sign-In/Contact Us buttons */}
              <div className='nextensio__navbar-menu_container-links-contact'>
                <a href="https://login.nextensio.net/">
                  <RiUser3Line size={25}/>
                  <button type="button">Sign In/Create Account</button>
                </a>
              </div>
                <button type="button">Contact Us</button>
              
            </div>
          </div>

        )}

    </div>
  )
}

export default NavBar