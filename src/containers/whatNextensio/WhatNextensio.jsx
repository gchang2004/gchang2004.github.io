import React from 'react';
import './whatNextensio.css';
import { motion } from 'framer-motion';
import { Feature } from '../../components';
import { RiCloudLine, RiShieldUserLine, RiTeamLine } from 'react-icons/ri';
import collab from '../../assets/vectorjuice_collab.png';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const WhatNextensio = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  //stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.5 } },
  };
  
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

  //animation parameters for MAIN IMAGE
  const leftMotion = {
    //movement = FADE-IN + slide-in from the LEFT
    hidden: { opacity: 0, x: -100 }, // INITIAL STAGE
    visible: { opacity: 1, x:0, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <motion.div className="nextensio__whatNextensio section__padding"
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0.2}}
      variants={containerMotion}>

        {/*About Nextensio => primary statement*/}
        <motion.div className="nextensio__whatNextensio-feature" variants={boxScale}>
          {/*NOTE => not using the imported FEATURE component*/}
          <motion.div className="nextensio__whatNextensio-features-title-block" variants={textMotion}>
            <div />
            <h2>{t('main-heading')}</h2>
          </motion.div>
          <motion.p variants={textMotion}>{t('main-text')}</motion.p>
        </motion.div>

        {/*Image + Subtitle*/}
        <div className='nextensio__whatNextensio-heading'>
          <motion.img src={collab} alt="collab" variants={leftMotion}/>
          <div className='nextensio__whatNextensio-heading__interact'>
            <motion.h1 className="gradient__text" variants={textMotion}>{t('whatNextensio-heading')}</motion.h1>
            <motion.div className="nextensio__whatNextensio-heading__interact-input" variants={textMotion}>
              <a href='mailto:support@nextensio.io
                    ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20Request%20Demo
                    &body=Type%20Your%20Message%20Here'>
                <button type="button">{t('whatNextensio-button')}</button>
              </a>
            </motion.div>
          </div>
        </div>

      {/*Three secondary features about Nextensio*/}
      <div className='nextensio__whatNextensio-container'>
          <div className="nextensio__whatNextensio-container-spacer">
            {/*Bullet-point #1 => Networking*/}
            <motion.div className='nextensio__whatNextensio-container__icons' variants={textMotion}>
                <RiCloudLine size={55}/>  
                <Feature title={t('main-container-title-1')} text={t('main-container-text-1')}/> 
            </motion.div>

            {/*Bullet-point #2 => Security*/}
            <motion.div className='nextensio__whatNextensio-container__icons' variants={textMotion}>
              <RiShieldUserLine size={55}/>
              <Feature title={t('main-container-title-2')} text={t('main-container-text-2')}/>
            </motion.div>

            {/*Bullet-point #3 => Scalability*/}
            <motion.div className='nextensio__whatNextensio-container__icons' variants={textMotion}>
              <RiTeamLine size={55}/>
              <Feature title={t('main-container-title-3')} text={t('main-container-text-3')}/>
            </motion.div>
          </div>
      </div>

      {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
      <div className="placeholder" id="features"></div>

    </motion.div>
  )
}

export default WhatNextensio