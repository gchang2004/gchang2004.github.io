import React from 'react';
import './features.css';
import { motion } from 'framer-motion';
import space from '../../assets/space.png';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Features = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  //animation parameters for TEXT
  const textMotion = {
    //movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -20 }, // INITIAL STAGEE
    visible: { opacity: 1, y: 0, transition: { delay: 0.75, duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  //animation parameters for BOX
  const boxScale = {
    //movement = FADE-IN + ENLARGE
    hidden: { opacity: 0, scale:0},
    visible:{ opacity: 1, scale: 1, transition:{ duration: 0.75, ease: 'easeInOut' } } // Scale value on hover
  }

  return (
    <motion.div className="nextensio__features section__padding" style={{ backgroundImage: `url(${space})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.2}}
      variants={boxScale}>

        {/*Maing Features Heading + Subheading */}
        <motion.div className="nextensio__features-heading" variants={textMotion}> 
          <h2>🚀</h2>
          <h1 className="gradient__text">{t('features-heading')}</h1>
        </motion.div>
        <motion.h3 variants={textMotion}>{t('features-content')}</motion.h3>
        <motion.p variants={textMotion}>{t('features-link')}</motion.p>

        {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
        <div className="placeholder" id="possibility"></div>
    </motion.div>
  )
}

export default Features