import React from 'react';
import { motion } from 'framer-motion';
import { Article } from '../../components';
import { ladder_v2, mobile_v2, puzzle_v2, thinker_v2, AWS, WSJ } from './imports'; 
import './blog.css';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Blog = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  //stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };
  
  //animation parameters for TEXT
  const textMotion = {
    //movement = FADE-IN + DOWNWARDS movement
    hidden: { opacity: 0, y: -20 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  //animation parameters for IMAGE
  const imageMotion = {
    //movement = FADE-IN + SLIDE LEFT
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <motion.div className="nextensio__blog section__padding"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        variants={containerMotion}>

        {/*Blog title*/}
        <div className="nextensio__blog-heading">
          <motion.h1 className="gradient__text" variants={textMotion}>{t('blog-heading-1')}<br />{t('blog-heading-2')}</motion.h1>
        </div>

        {/* <Article /> is a component template imported here for use*/}
        <div className="nextensio__blog-container">
           {/*Main spotlight container*/}
          <div className="nextensio__blog-container_groupA">
            <motion.a href="https://www.youtube.com/watch?v=p7MqvJAKLoM" variants={imageMotion}>
              <Article imgUrl={WSJ} category={t('video-1')} date={t('video-date-1')} title={t('video-title-1')}/>
            </motion.a>
            <motion.a href="https://www.youtube.com/watch?v=mxT233EdY5c" variants={imageMotion}>
              <Article imgUrl={AWS} category={t('video-2')} date={t('video-date-2')} title={t('video-title-2')}/>
            </motion.a>
          </div>

          {/*Gradient Bar*/}
          <motion.div className="nextensio__blog-gradient-bar" variants={textMotion}>
            <div />
          </motion.div>

          {/*Secondary containers*/}
          <div className="nextensio__blog-container_groupB">
            <motion.a href="https://aws.amazon.com/what-is-cloud-computing/"
              variants={imageMotion}>
              <Article imgUrl={thinker_v2} category={t('blog-1')} date={t('blog-date-1')} title={t('blog-title-1')}/>
            </motion.a>
            <motion.a href="https://www.cisco.com/c/en/us/solutions/cloud/what-is-cloud-computing.html"
              variants={imageMotion}>
              <Article imgUrl={puzzle_v2} category={t('blog-2')} date={t('blog-date-2')} title={t('blog-title-2')}/>
            </motion.a>
            <motion.a href="https://cloud.google.com/learn/what-is-cloud-computing"
              variants={imageMotion}>
              <Article imgUrl={mobile_v2} category={t('blog-3')} date={t('blog-date-3')} title={t('blog-title-3')}/>
            </motion.a>
            <motion.a href="https://www.ibm.com/topics/cloud-computing"
              variants={imageMotion}>
              <Article imgUrl={ladder_v2} category={t('blog-4')} date={t('blog-date-4')} title={t('blog-title-4')}/>
            </motion.a>
          </div>
        </div>

    </motion.div>
  )
}

export default Blog