import React from 'react';
import './cta.css';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const CTA = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__cta">
        {/*Text content*/}
        <div className="nextensio__cta-content">
          {/*Title + Gradient Logo*/}
          <div className="nextensio__cta-content-title">
            <h2>{t('cta-title')}</h2>
            <h2 className="gradient__text">Nextensio</h2>
          </div>
          <p>{t('cta-text')}</p>
        </div>

        {/*Email + Button*/}
        <div className="nextensio__cta-interact">
          <input type="email" id="email" placeholder={t('cta-input')} autoComplete='email'/>
          <a href='https://controller.nextensio.net/signup'>
            <button type="button">{t('cta-button')}</button>
          </a>
        </div>

    </div>
  )
}

export default CTA