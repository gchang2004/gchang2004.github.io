import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import { RiMenuLine, RiCloseLine, RiAccountCircleLine, RiArrowRightSLine } from 'react-icons/ri';
import logo from '../../assets/logos/logo.PNG';
import Toggle from '../toggle/Toggle'; //DARK/LIGHT mode toggler

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const useCloseMenu = (handler) => {
  //Introducing reference variable to the side-menu div
  const menuRef = useRef();

  //useEffect to close the side-menu
  useEffect(() => {
    //checks if the mouse position is outside of the assigned div ==> side-menu
    const useClickOutside = (event) => {
      if(!menuRef.current || !menuRef.current.contains(event.target) || event.keyCode === 27){
        handler(); //then sets setToggleMenu(false)
      }
    }

    //checks if the escape key is pressed
    const useEscapeKey = (event) => {
      if(event.keyCode === 27){
          handler(); //then sets setToggleMenu(false)
        }
    }

  //executes the command when the user clicks or presses the escape key
  document.addEventListener("mousedown", useClickOutside);
  document.addEventListener("keydown", useEscapeKey);

  //post-cleanup to remove the listener event
  return () => {
    document.removeEventListener("mousedown", useClickOutside);
    document.removeEventListener("keydown", useEscapeKey);
  }
  })
  
  return menuRef;
}

//Naming Convention ==> Block Element Modifier (BEM)
const NavBar = ({toggler, themeOutput, status}) => {
  //introducting variables from i18n
  const { t } = useTranslation();
  
  //Introducing toggle action to menu bar
  const [toggleMenu, setToggleMenu] = useState(false);

  //Side-menu bar closes when clicked outside of the div or when the escape key is pressed 
  const menuRef = useCloseMenu(() => {
    setToggleMenu(false);
  })

  //stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.25 } },
  };

  //animation parameters for TEXT
  const textMotion = {
    //movement = FADE-IN
    hidden: { opacity: 0}, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  //animation parameters for SIDE-MENU
  const menuMotion = {
    //movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -20 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeInOut', staggerChildren: 0.1 }}, // ANIMATION STAGE
  };

  return (
    /*Navbar main skeleton*/
    <motion.div className="nextensio__navbar" initial="hidden" animate="visible" variants={containerMotion}>
      {/* logo features */}
      <motion.div className="nextensio__navbar-links_logo" variants={textMotion}>
          <a href="https://gchang2004.github.io/"><img src={logo} alt="logo"/></a>
      </motion.div>

      <div className="nextensio__navbar-links_spacing">
        {/* TOP Menu-bar features */}
        <motion.div className="nextensio__navbar-links_container" variants={textMotion}>
          {/*Menu Options for TOP NavBar*/}
          <p><a href='#whatNextensio'>{t('About Us')}</a></p>
          <p><a href='#features'>{t('Our Mission')}</a></p>
          <p><a href='#possibility'>{t('Solutions')}</a></p>
          <p><a href='#blog'>{t('Explore')}</a></p>
        </motion.div>
      </div>
        
      {/* Sign In + Contact Us features */}
      <motion.div className='nextensio__navbar-contact' variants={textMotion}>
        {/* Login portal => button as ICON */}
        <a href="https://login.nextensio.net/">
          <RiAccountCircleLine size={34}/>
        </a>
        <a href='mailto:support@nextensio.io
                    ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                    &body=Type%20Your%20Message%20Here'>
          <button type="button">{t('navbar-contact')}</button>
        </a>
      </motion.div>

      {/* Mobile format for menu-dropdown icon */}
      <motion.div className='nextensio__navbar-menu' variants={textMotion}>
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
      </motion.div>

      {/* What the menu looks like when clicked! */}
      {toggleMenu && (
      <div className="nextensio__navbar-menu_container-dimmed fade-in">
        <motion.div className='nextensio__navbar-menu_container slide-in-right' ref={menuRef} id="menubar" variants={menuMotion}>
          {/*Menu buttons*/}
          <motion.div className='nextensio__navbar-menu_toggler' variants={textMotion}>
          <Toggle toggler={toggler} themeOutput={themeOutput} status={status}/>
            <div className='nextensio__container-icons'>
              <RiCloseLine
                size={32}
                onClick={() => setToggleMenu(false)}/>
            </div>
          </motion.div>

          {/*SIDE Menu-bar features*/}
          <div className='nextensio__navbar-menu_container-links'>
            <motion.div variants={textMotion}>
              <a href='#whatNextensio' onClick={() => setToggleMenu(false)}>
                <button type="button">{t('About Us')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>
            <motion.div variants={textMotion}>
              <a href='#features' onClick={() => setToggleMenu(false)}>
                <button type="button">{t('Our Mission')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>
            <motion.div variants={textMotion}>
              <a href='#possibility' onClick={() => setToggleMenu(false)}>
                <button>{t('Solutions')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>
            <motion.div variants={textMotion}>
              <a href='#blog' onClick={() => setToggleMenu(false)}>
                <button>{t('Explore')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>

            {/*Gradient bar divider*/}
            <motion.div className="nextensio__navbar-menu_gradient-bar" variants={textMotion}>
              <div />
            </motion.div>

            {/*Secondary menu buttons*/}
            <motion.div variants={textMotion}>
              <a href='mailto:support@nextensio.io
                      ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                      &body=Type%20Your%20Message%20Here'>
                <button type="button">{t('navbar-contact')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>
            <motion.div variants={textMotion}>
              <a href='#footer' onClick={() => setToggleMenu(false)}>
                <button type="button">{t('navbar-business')}</button>
                <RiArrowRightSLine size={27}/>
              </a>
            </motion.div>

          </div>

          {/*Gradient bar divider*/}
          <motion.div className="nextensio__navbar-menu_gradient-bar" variants={textMotion}>
            <div />
          </motion.div>

          {/*Sign-In/Contact Us buttons*/}
          <motion.div className='nextensio__navbar-menu_container-links-contact' variants={textMotion}>
            <a href="https://login.nextensio.net/">
              <RiAccountCircleLine size={30}/>
              <button type="button">{t('navbar-account')}</button>
            </a>
          </motion.div>

        </motion.div>
      </div>)}

    </motion.div>
  )
}

export default NavBar