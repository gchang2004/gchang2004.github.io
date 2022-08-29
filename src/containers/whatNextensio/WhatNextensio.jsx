import React from 'react';
import './whatNextensio.css';
import { Feature } from '../../components';
import { RiCloudLine, RiShieldUserLine, RiTeamLine } from 'react-icons/ri';
import collab from '../../assets/vectorjuice_collab.png';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const WhatNextensio = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__whatNextensio section__padding">
      {/*About Nextensio => primary statement*/}
      <div className="nextensio__whatNextensio-feature" >
        {/*NOTE => not using the imported FEATURE component*/}
        <div className="nextensio__whatNextensio-features-title-block">
          <div />
          <h2>{t('main-heading')}</h2>
        </div>
        <p>{t('main-text')}</p>
      </div>

      {/*Image + Subtitle*/}
      <div className='nextensio__whatNextensio-heading'>
        <img src={collab} alt="collab"/>
        <div className='nextensio__whatNextensio-heading__interact'>
          <h1 className="gradient__text">{t('whatNextensio-heading')}</h1>
          <div className="nextensio__whatNextensio-heading__interact-input">
            <a href='mailto:support@nextensio.io
                  ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20Request%20Demo
                  &body=Type%20Your%20Message%20Here'>
              <button type="button">{t('whatNextensio-button')}</button>
            </a>
          </div>
        </div>
      </div>

      {/*Three secondary bulletpoints about Nextensio*/}
      <div className='nextensio__whatNextensio-container'>
          <div className="nextensio__whatNextensio-container-spacer">
            {/*Bullet-point #1 => Networking*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiCloudLine size={55}/>            
              <Feature title={t('main-container-title-1')} text={t('main-container-text-1')}/>
            </div>

            {/*Bullet-point #2 => Security*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiShieldUserLine size={55}/>
              <Feature title={t('main-container-title-2')} text={t('main-container-text-2')}/>
            </div>

            {/*Bullet-point #3 => Scalability*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiTeamLine size={55}/>
              <Feature title={t('main-container-title-3')} text={t('main-container-text-3')}/>
            </div>
          </div>
      </div>

      {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
      <div className="placeholder" id="features"></div>

    </div>
  )
}

export default WhatNextensio