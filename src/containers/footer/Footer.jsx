import React from 'react';
import './footer.css';
import logo from '../../assets/logos/logo.PNG';
import { RiAppStoreLine, RiGooglePlayLine, RiLinkedinBoxLine, RiYoutubeLine, RiFacebookCircleLine, RiTwitterLine, RiInstagramLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="nextensio__footer section__padding">
        {/*Skeleton container for the footer links*/}
        <div className="nextensio__footer-links">
          {/*Logo body*/}
          <div className="nextensio__footer-links_logo">
            <a href="#home"><img src={logo} alt="logo" /></a>
            <p>Established in 2022</p> 
            <p>Based in Dover, DE</p>
            <a href='mailto:support@nextensio.io
                      ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                      &body=Type%20Your%20Message%20Here'>
              <h6>support@nextensio.io</h6>
            </a>
            <div className="nextensio__footer-links_social-media">
              <a href='https://www.linkedin.com/'>
                <RiLinkedinBoxLine size={26}/>
              </a>
              <a href='https://twitter.com/?lang=en'>
                <RiTwitterLine  size={26}/>
              </a>
              <a href='https://www.facebook.com/'>
                <RiFacebookCircleLine size={26}/>
              </a>
              <a href='https://www.youtube.com/'>
                <RiYoutubeLine size={26}/>
              </a>
              <a href='https://www.instagram.com/?hl=en'>
                <RiInstagramLine size={26}/>
              </a>
            </div>
          </div>

          {/*Webpage Quicklinks body*/}
          <div className="nextensio__footer-links_div">
            <h4>Links</h4>
            <a href='#whatNextensio'><p>About Us</p></a>
            <a href='#features'><p>Our Mission</p></a>
            <a href='#possibility'><p>Solutions</p></a>
            <a href='#blog'><p>Explore</p></a>
          </div>

          {/*Company resources body*/}
          <div className="nextensio__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Sustainability & Impact</p>
            <p>Careers</p>
          </div>

          {/*Business info body*/}
          <div className="nextensio__footer-links_div">
            <h4>Business</h4>
            <a href='#brand'><p>Partners</p></a>
            <p>Investors</p>
            <a href='https://nextensio.status.io/'><p>Developer Portal</p></a>
          </div>

          {/*Contact info body*/}
          <div className="nextensio__footer-links_div">
            <h4>Get Started Today</h4>
            <div className="nextensio__footer-links_hyperlinks">
              <a href="https://www.apple.com/app-store/">
                <RiAppStoreLine size={26}/>
                <p>App Store</p>
              </a>
            </div>

            <div className="nextensio__footer-links_hyperlinks">
              <a href="https://play.google.com/store/games?hl=en&gl=US">
                <RiGooglePlayLine size={26}/>
                <p>Google Play</p>
              </a>
            </div>
            <a href='mailto:support@nextensio.io
                    ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Quotes]%20
                    &body=Type%20Your%20Message%20Here'>
              <p>Request Demo</p>
            </a>
          </div>

        </div>

        {/*Gradient bar divider*/}
        <div className="nextensio__footer_gradient-bar">
            <div />
        </div>

        {/*Copyright + Website language body*/}
        <div className="nextensio__footer-copyright">
            <p>Copyright © 2022 Nextensio Inc. All rights reserved.</p>
            <select name="languages" id="lang">
              <option value="United States">🇺🇸 United States</option>
              <option value="China">🇨🇳 中国</option>
              <option value="Korea">🇰🇷 대한민국</option>
            </select>  
        </div>
    </div>
  )
}

export default Footer