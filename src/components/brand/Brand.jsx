import React from 'react';
import './brand.css';
import { airbnb, cisco, hewlettpackard, nvidia, slack, spotify, tmobile, uber } from './imports';

const Brand = () => {
  return (
    <div className="nextensio__brand section__padding" id="brand">
        {/*Gradient Bar*/}
        <div className="nextensio__gradient-bar">
          <div />
        </div>
        
        {/*Brand introduction title*/}
        <div className="nextensio__brand-title">
          <h3 class="label">Deployed in</h3>
          <h2 class="gradient__text">established brand companies</h2>
          <h3 class="label">worldwide</h3>
        </div>

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

          {/*Nvidia logo + hyperlink website*/}
          <div className="nextensio__brand-nvidia">
            <a href="https://www.nvidia.com/en-us/"><img src={nvidia} alt="nvidia"/></a>
          </div>

          {/*Slack logo + hyperlink website*/}
          <div className="nextensio__brand-slack">
            <a href="https://slack.com/"><img src={slack} alt="slack"/></a>
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
        </div>

    </div>
  )
}

export default Brand