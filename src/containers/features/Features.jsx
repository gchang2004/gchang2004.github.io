import React from 'react';
import './features.css';
import space from '../../assets/space.png';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Features = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__features section__padding" style={{ backgroundImage: `url(${space})` }}>
      {/*Maing Features Heading + Subheading */}
      <div className="nextensio__features-heading">
        <h2>🚀</h2>
        <h1 className="gradient__text">{t('features-heading')}</h1>
      </div>
      <h3>{t('features-content')}</h3>
      <p>{t('features-link')}</p>

      {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
      <div className="placeholder" id="possibility"></div>
    </div>
  )
}

export default Features