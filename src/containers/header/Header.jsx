import React from 'react';
import { motion } from 'framer-motion';
import './header.css';
import privacy from '../../assets/vectorjuice_privacy.png';

// Internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Header = () => {
  // Introducing variables from i18n
  const { t } = useTranslation();

  //stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.25 } },
  };
  
  //animation parameters for TEXT
  const textMotion = {
    //movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: 100 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  //animation parameters for IMAGE
  const imageMotion = {
    //movement = FADE-IN + SLIDE LEFT
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    /* Header main skeleton and ID reference */
    <div className="nextensio__header section__padding">
      {/* Header content */}
      <motion.div className="nextensio__header-content"
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.2}}
        variants={containerMotion}>

        {/* Heading + Subheading text */}
        <motion.h1 className="gradient__text" variants={textMotion}>{t('title')}</motion.h1>
        <div className="nextensio__header-content-animation">
          <motion.p variants={textMotion}>{t('subtitle')}</motion.p>
        </div>

        {/* Header Buttons */}
        <div className="nextensio__header-content__input">
          <a href="mailto:support@nextensio.io?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20Request%20Demo&body=Type%20Your%20Message%20Here">
            <motion.button variants={textMotion}>{t('header-button-1')}</motion.button>
          </a>
          <div className="nextensio__header-content__input-explore">
            <a href="#blog">
              <motion.button variants={textMotion}>{t('header-button-2')}</motion.button>
            </a>
          </div>
        </div>

      </motion.div>
    
      {/* Header Image */}
      <motion.div className="nextensio__header-image"
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0.2}}
        variants={imageMotion}>
        <img src={privacy} alt="privacy"/>
      </motion.div>
    </div>
  );
};

export default Header;
