import React, { useState } from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine, RiAccountCircleLine, RiArrowRightSLine } from 'react-icons/ri';
import logo from '../../assets/logos/logo.PNG';
import Toggle from '../toggle/Toggle'; //DARK/LIGHT mode toggler

const Menu = () => (
  <>
  {/*Menu Options for TOP NavBar*/}
  <p>
    <a href='#whatNextensio'>About</a>
  </p>
  <p><a href='#features'>Our Mission</a></p>
  <p><a href='#possibility'>Solutions</a></p>
  <p><a href='#blog'>Explore</a></p>
  </>
)

//Naming Convention ==> Block Element Modifier (BEM)
const NavBar = ({toggler, themeOutput, status}) => {
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
        {/* TOP Menu-bar features */}
        <div className="nextensio__navbar-links_container">
            <Menu />
        </div>
      </div>
        
      {/* Sign In + Contact Us features */}
      <div className='nextensio__navbar-contact'>
        {/* Login portal => button as ICON */}
        <a href="https://login.nextensio.net/">
          <RiAccountCircleLine size={34}/>
        </a>
        <a href='mailto:support@nextensio.io
                    ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                    &body=Type%20Your%20Message%20Here'>
          <button type="button">Contact Us</button>
        </a>
      </div>

      {/* Mobile format for menu-dropdown icon */}
      <div className='nextensio__navbar-menu'>
        {/* Logic statement for menu-dropdown icon */}
        {toggleMenu
          ?<RiMenuLine
            color="#ffffff"
            size={27}
            onClick={() => setToggleMenu(false)}/>
          :<RiMenuLine
            size={27}
            onClick={() => setToggleMenu(true)}/>
        }
      </div>

      {/* What the menu looks like when clicked! */}
      {toggleMenu && (
      <div className="nextensio__navbar-menu_container-dimmed fade-in">
        <div className='nextensio__navbar-menu_container slide-in-right' id="menubar">
          {/*Menu buttons*/}
          <div className='nextensio__navbar-menu_toggler'>
          <Toggle toggler={toggler} themeOutput={themeOutput} status={status}/>
            <div className='nextensio__container-icons'>
              <RiCloseLine
                size={32}
                onClick={() => setToggleMenu(false)}/>
            </div>
          </div>

          {/*SIDE Menu-bar features*/}
          <div className='nextensio__navbar-menu_container-links'>
            <a href='#whatNextensio' onClick={() => setToggleMenu(false)}>
              <button type="button">About</button>
              <RiArrowRightSLine size={27}/>
            </a>
            <a href='#features' onClick={() => setToggleMenu(false)}>
              <button type="button">Our Mission</button>
              <RiArrowRightSLine size={27}/>
            </a>
            <a href='#possibility' onClick={() => setToggleMenu(false)}>
              <button>Solutions</button>
              <RiArrowRightSLine size={27}/>
            </a>
            <a href='#blog' onClick={() => setToggleMenu(false)}>
              <button>Explore</button>
              <RiArrowRightSLine size={27}/>
            </a>
          </div>
          
          {/*Gradient bar divider*/}
          <div className="nextensio__navbar-menu_gradient-bar">
            <div />
          </div>

          {/*Sign-In/Contact Us buttons*/}
          <div className='nextensio__navbar-menu_container-links-contact'>
            <a href="https://login.nextensio.net/">
              <RiAccountCircleLine size={30}/>
              <button type="button">Sign In/Create Account</button>
            </a>
          </div>
          <a href='mailto:support@nextensio.io
                  ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                  &body=Type%20Your%20Message%20Here'>
            <button type="button">Contact Us</button>
          </a>
          <button type="button">For Business</button>
        </div>
      </div>)}

    </div>
  )
}

export default NavBar