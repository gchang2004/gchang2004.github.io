import React from 'react';
import './brand.css';
import { airbnb, cisco, hewlettpackard, nvidia, slack, spotify, tmobile, uber } from './imports';
import { hewlettpackard_white, nvidia_white, slack_white, uber_white } from './imports'; //DARK Mode Images
import Marquee from "react-fast-marquee"; //sliding marquee for tablet/mobile formats

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Brand = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__brand section__padding" id="brand">
      {/*Gradient Bar*/}
      <div className="nextensio__gradient-bar">
        <div />
      </div>

      {/*Brand introduction title*/}
      <div className="nextensio__brand-title">
        <h3 class="label">{t('brand-1')}</h3>
        <h2 class="gradient__text">{t('brand-2')}</h2>
        <h3 class="label">{t('brand-3')}</h3>
      </div>

      <div className="nextensio__brand-marquee">
        <Marquee pauseOnHover="true" speed={12} gradient={false}>
          <div className="nextensio__brand-logos">
            {/*Airbnb logo + hyperlink website*/}
            <div className="nextensio__brand-airbnb">
              <a href="https://www.airbnb.com/"><img src={airbnb} alt="airbnb"/></a>
            </div>

            {/*Cisco logo + hyperlink website*/}
            <div className="nextensio__brand-cisco">
              <a href="https://www.cisco.com/"><img src={cisco} alt="cisco"/></a>
            </div>

            {/*Hewlett Packard logo + hyperlink website*/}
            <div className="nextensio__brand-hewlettpackard">
              <a href="https://www.hp.com/us-en/home.html"><img src={hewlettpackard} alt="hewlettpackard"/></a>
            </div>

            {/*DARK MODE ==> Hewlett Packard*/}
            <div className="nextensio__brand-hewlettpackard_DARK">
              <a href="https://www.hp.com/us-en/home.html"><img src={hewlettpackard_white} alt="hewlettpackard_dark-mode"/></a>
            </div>

            {/*Nvidia logo + hyperlink website*/}
            <div className="nextensio__brand-nvidia">
              <a href="https://www.nvidia.com/en-us/"><img src={nvidia} alt="nvidia"/></a>
            </div>

            {/*DARK MODE ==> Nvidia*/}
            <div className="nextensio__brand-nvidia_DARK">
              <a href="https://www.nvidia.com/en-us/"><img src={nvidia_white} alt="nvidia_dark-mode"/></a>
            </div>

            {/*Slack logo + hyperlink website*/}
            <div className="nextensio__brand-slack">
              <a href="https://slack.com/"><img src={slack} alt="slack"/></a>
            </div>

            {/*DARK MODE ==> Slack*/}
            <div className="nextensio__brand-slack_DARK">
              <a href="https://slack.com/"><img src={slack_white} alt="slack_dark-mode"/></a>
            </div>

            {/*Spotify logo + hyperlink website*/}
            <div className="nextensio__brand-spotify">
              <a href="https://open.spotify.com/"><img src={spotify} alt="spotify"/></a>
              
            </div>

            {/*T-Mobile logo + hyperlink website*/}
            <div className="nextensio__brand-tmobile">
              <a href="https://www.t-mobile.com/"><img src={tmobile} alt="tmobile" /></a>
            </div>

            {/*Uber logo + hyperlink website*/}
            <div className="nextensio__brand-uber">
              <a href="https://www.uber.com/"><img src={uber} alt="uber"/></a>
            </div>

            {/*DARK MODE ==> Uber*/}
            <div className="nextensio__brand-uber_DARK">
              <a href="https://www.uber.com/"><img src={uber_white} alt="uber_dark-mode"/></a>
            </div>
          </div>
        </Marquee>
      </div>

      {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
      <div className="placeholder" id="whatNextensio"></div>

    </div>
  )
}

export default Brand