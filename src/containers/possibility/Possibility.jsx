import React from 'react';
import { motion } from 'framer-motion';
import './possibility.css';
import { TextTemplate } from '../../components';
import { Bulletpoints } from '../../components';
import { RiCheckLine } from 'react-icons/ri';
import { infinite, geartriangle, lock} from './imports'; 

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Possibility = () => {
  //introducting variables from i18n
  const { t } = useTranslation();
  
  //stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.25 } },
  };
  
  //animation parameters for TEXT
  const leftMotion = {
    //movement = FADE-IN + slide-in from the LEFT
    hidden: { opacity: 0, x: -32 }, // INITIAL STAGE
    visible: { opacity: 1, x:0, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  //animation parameters for IMAGE
  const rightMotion = {
    //movement = FADE-IN + slide-in from the RIGHT
    hidden: { opacity: 0, x: 32}, // INITIAL STAGE
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <div className="nextensio__possibility section__padding">
        {/*Container #1*/}
        <motion.div className="nextensio__possibility_rightText"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.2}}
          variants={containerMotion}>

          {/*Image*/}
          <motion.div className="nextensio__possibility-leftImage" variants={leftMotion}>
            <img src={infinite} alt="infinite" />
          </motion.div>

          {/*Text Content*/}
          <motion.div className="nextensio__possibility-content" variants={rightMotion}>
            <TextTemplate title={t('text-title-1')}
                          text={t('text-content-1')}
                          link={t('text-link')}/>
          </motion.div>
        </motion.div>

        {/*Container #2*/}
        <motion.div className="nextensio__possibility_leftText"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.2}}
          variants={containerMotion}>

          {/*Image*/}
          <motion.div className="nextensio__possibility-rightImage" variants={rightMotion}>
            <img src={lock} alt="lock" />
          </motion.div>
          
          {/*Text Content*/}
          <motion.div className="nextensio__possibility-content" variants={leftMotion}>
            <TextTemplate title={t('text-title-2')}
                          text={t('text-content-2')}/>
          </motion.div>
        </motion.div>

        {/*Container #3*/}
        <motion.div className="nextensio__possibility_rightText"
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0.20}}
          variants={containerMotion}>

          {/*Image*/}
          <motion.div className="nextensio__possibility-leftImage" variants={leftMotion}>
            <img src={geartriangle} alt="geartriangle" />
          </motion.div>

          {/*Text Content*/}
          <motion.div className="nextensio__possibility-content" variants={rightMotion}>
            <TextTemplate title={t('text-title-3')}
                          text={t('text-content-3')}/>
            <div className="nextensio__possibility-list">
              {/*Use of Bulletpoint template*/}
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-1')}/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-2')}/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-3')}/>
            </div>
          </motion.div>

        </motion.div>
        
        {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
        <div className="placeholder" id="blog"></div>
        
    </div>
  )
}

export default Possibility