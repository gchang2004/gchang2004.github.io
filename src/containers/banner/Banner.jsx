import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './banner.css';
import { RiCloseLine } from 'react-icons/ri';
import Toggle from '../../components/toggle/Toggle';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

function Banner (props) {
  //introducting variables from i18n
  const { t } = useTranslation();

  /*Setting the App.js variables for dark/light mode to props*/
  const toggler = props.toggler;
  const themeOutput = props.themeOutput;
  const status = props.status;

  /*animation parameters for banner*/
  const bannerAnimation = {
  //movement = FADE-IN + DOWNWARDS movement
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeInOut' } }
  };

  return ( //when the trigger is initialized (begin as true), the banner will appear!
    <AnimatePresence>
      {props.trigger && (
        <motion.div className="nextensio__banner section__padding"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bannerAnimation}
          >
          {/*Toggle EXIT for banner to be hidden*/}
          <div className="nextensio__banner-toggle">
            <RiCloseLine
              size={32}
              onClick={() => props.setTrigger(false)}/> {/*this command will set the trigger to false ==> effectively closing the banner */}
          </div>

          {/*Main banner text*/}
          <div className="nextensio__banner-text">
            <h5>👋</h5>
            <p>{t('banner-1')}</p>
            <a href='mailto:support@nextensio.io
                        ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                        &body=Type%20Your%20Message%20Here'>
              <h4>{t('banner-contact')}</h4>
            </a>
            <p>{t('banner-2')}</p>
            <h5>🎯</h5>
          </div>
          
          {/*DARK/LIGHT mode toggler*/}
          <Toggle
            toggler={toggler}
            themeOutput={themeOutput}
            status={status}
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Banner