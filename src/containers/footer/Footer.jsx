import React from 'react';
import './footer.css';
import logo from '../../assets/logos/logo.PNG';
import { RiAppStoreLine, RiGooglePlayLine, RiLinkedinBoxLine, RiYoutubeLine, RiFacebookCircleLine, RiTwitterLine, RiInstagramLine } from 'react-icons/ri';

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Footer = () => {
  //introducting variables from i18n
  const { t, i18n } = useTranslation();

  //purpose is to respond to the dropdown menu when clicked
  function changeLocale() {
    var selectBox = document.getElementById("lang"); //finds the dropdown box first
    var selectedValue = selectBox.options[selectBox.selectedIndex].value; //represents the options "index" order as the value passed (ex. value = "blah")
    i18n.changeLanguage(selectedValue); //using the string value to change the language
  }
  
  return (
    <div className="nextensio__footer section__padding" id="footer">
        {/*Skeleton container for the footer links*/}
        <div className="nextensio__footer-links">
          {/*Logo body*/}
          <div className="nextensio__footer-links_logo">
          <a href="https://gchang2004.github.io/"><img src={logo} alt="logo"/></a>
            <p>{t('date')}</p> 
            <p>{t('location')}</p>
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
            <h4>{t('Links')}</h4>
            <a href='#whatNextensio'><p>{t('About Us')}</p></a>
            <a href='#features'><p>{t('Our Mission')}</p></a>
            <a href='#possibility'><p>{t('Solutions')}</p></a>
            <a href='#blog'><p>{t('Explore')}</p></a>
          </div>

          {/*Company resources body*/}
          <div className="nextensio__footer-links_div">
            <h4>{t('Company')}</h4>
            <p>{t('Terms & Conditions')}</p>
            <p>{t('Privacy Policy')}</p>
            <p>{t('Sustainability & Impact')}</p>
            <p>{t('Careers')}</p>
          </div>

          {/*Business info body*/}
          <div className="nextensio__footer-links_div">
            <h4>{t('Business')}</h4>
            <a href='#brand'><p>{t('Partners')}</p></a>
            <p>{t('Investors')}</p>
            <a href='https://nextensio.status.io/'><p>{t('Developer Portal')}</p></a>
          </div>

          {/*Contact info body*/}
          <div className="nextensio__footer-links_div">
            <h4>{t('Get Started Today')}</h4>
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
              <p>{t('Request Demo')}</p>
            </a>
          </div>

        </div>

        {/*Gradient bar divider*/}
        <div className="nextensio__footer_gradient-bar">
            <div />
        </div>

        {/*Copyright + Website language body*/}
        <div className="nextensio__footer-copyright">
            <p>{t('legal')}</p>
            <select id="lang" onChange={() => changeLocale()}>
              <option value="en">🇺🇸 United States</option>
              <option value="de">🇩🇪 Deutschland</option>
              <option value="es">🇪🇸 España</option>
              <option value="pt">🇵🇹 Portugal</option>
              <option value="fr">🇫🇷 France</option>
              <option value="it">🇮🇹 Italia</option>
              <option value="cn">🇨🇳 中国 (简体)</option>
              <option value="tw">🇹🇼 台灣 (繁體)</option>
              <option value="kr">🇰🇷 대한민국</option>
              <option value="ja">🇯🇵 日本語</option>
            </select> 
        </div>
    </div>
  )
}

export default Footer