import React from 'react';
import { Article } from '../../components';
import { ladder_v2, mobile_v2, puzzle_v2, thinker_v2, AWS, WSJ } from './imports'; 
import './blog.css';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Blog = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__blog section__padding">
        {/*Blog title*/}
        <div className="nextensio__blog-heading">
          <h1 className="gradient__text">{t('blog-heading-1')}<br />{t('blog-heading-2')}</h1>
        </div>

        {/* <Article /> is a component template imported here for use*/}
        <div className="nextensio__blog-container">
           {/*Main spotlight container*/}
          <div className="nextensio__blog-container_groupA">
            <a href="https://www.youtube.com/watch?v=p7MqvJAKLoM">
              <Article imgUrl={WSJ} category={t('video-1')} date={t('video-date-1')} title={t('video-title-1')}/></a>
            <a href="https://www.youtube.com/watch?v=mxT233EdY5c">
              <Article imgUrl={AWS} category={t('video-2')} date={t('video-date-2')} title={t('video-title-2')}/></a>
          </div>

          {/*Gradient Bar*/}
          <div className="nextensio__blog-gradient-bar">
            <div />
          </div>

          {/*Secondary containers*/}
          <div className="nextensio__blog-container_groupB">
            <a href="https://nextensio.io/f/deploying-different-versions-of-cloud-applications-seamlessly?blogcategory=Cloud+Apps">
              <Article imgUrl={thinker_v2} category={t('blog-1')} date={t('blog-date-1')} title={t('blog-title-1')}/></a>
            <a href="https://nextensio.io/f/cloud-migration?blogcategory=Cloud+Strategy">
              <Article imgUrl={puzzle_v2} category={t('blog-2')} date={t('blog-date-2')} title={t('blog-title-2')}/></a>
            <Article imgUrl={mobile_v2} category={t('blog-3')} date={t('blog-date-3')} title={t('blog-title-3')}/>
            <Article imgUrl={ladder_v2} category={t('blog-4')} date={t('blog-date-4')} title={t('blog-title-4')}/>
          </div>
        </div>

    </div>
  )
}

export default Blog