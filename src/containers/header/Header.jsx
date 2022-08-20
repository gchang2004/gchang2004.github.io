import React from 'react';
import './header.css';
import privacy from '../../assets/vectorjuice_privacy.png';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Header = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    /*Header main skeleton and ID refrence*/
    <div className="nextensio__header section__padding">
        
        {/*Header content*/}
        <div className="nextensio__header-content">
          {/*Heading + Subheading text*/}
          <h1 className="gradient__text">{t('title')}</h1>
          <div className="nextensio__header-content-animation">
            <p>{t('subtitle')}</p>
          </div>
          
          {/*Header buttons*/}
          <div className="nextensio__header-content__input">
            <a href='mailto:support@nextensio.io
                  ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20Request%20Demo
                  &body=Type%20Your%20Message%20Here'>
              <button type="button">{t('header-button-1')}</button>
            </a>
            <div className='nextensio__header-content__input-explore'>
              <a href='#blog'><button type="button">{t('header-button-2')}</button></a>
            </div>
          </div>

        </div>

        {/*Header Iamge*/}
        <div className="nextensio__header-image">
            <img src={privacy} alt="privacy"/>
        </div>
        
    </div>
  )
}

export default Header