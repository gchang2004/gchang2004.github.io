import React from 'react';
import './cta.css';
import { motion } from 'framer-motion';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const CTA = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  //animation parameters for BOX
  const boxScale = {
    //movement = FADE-IN + ENLARGE
    hidden: { opacity: 0, scale:0},
    visible:{ opacity: 1, scale: 1, transition:{ duration: 0.75, ease: 'easeInOut' } } // Scale value on hover
  }
  
  //animation parameters for TEXT
  const textMotion = {
    //movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -20 }, // INITIAL STAGEE
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <motion.div className="nextensio__cta"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0}}
      variants={boxScale}>
      {/*Text content*/}
      <motion.div className="nextensio__cta-content" variants={textMotion}>
        {/*Title + Gradient Logo*/}
        <div className="nextensio__cta-content-title">
          <motion.h2 variants={textMotion}>{t('cta-title')}</motion.h2>
          <motion.h2 className="gradient__text" variants={textMotion}>Nextensio</motion.h2>
        </div>
        <motion.p variants={textMotion}>{t('cta-text')}</motion.p>
      </motion.div>

      {/*Email + Button*/}
      <motion.div className="nextensio__cta-interact" variants={textMotion}>
        <input type="email" id="email" placeholder={t('cta-input')} autoComplete='email'/>
        <a href='https://controller.nextensio.net/signup'>
          <button type="button">{t('cta-button')}</button>
        </a>
      </motion.div>

    </motion.div>
  )
}

export default CTA