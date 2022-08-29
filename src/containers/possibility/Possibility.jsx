import React from 'react';
import './possibility.css';
import { TextTemplate } from '../../components';
import { Bulletpoints } from '../../components';
import { RiCheckLine } from 'react-icons/ri';
import { infinite, geartriangle, lock} from './imports'; 

//internationalizing using i18next
import { useTranslation } from 'react-i18next';

const Possibility = () => {
  //introducting variables from i18n
  const { t } = useTranslation();

  return (
    <div className="nextensio__possibility section__padding">
        {/*Container #1*/}
        <div className="nextensio__possibility_rightText">
          {/*Image*/}
          <div className="nextensio__possibility-leftImage">
            <img src={infinite} alt="infinite" />
          </div>

          {/*Text Content*/}
          <div className="nextensio__possibility-content">
            <TextTemplate title={t('text-title-1')}
                          text={t('text-content-1')}
                          link={t('text-link')}/>
          </div>
        </div>

        {/*Container #2*/}
        <div className="nextensio__possibility_leftText">
          {/*Image*/}
          <div className="nextensio__possibility-rightImage">
            <img src={lock} alt="lock" />
          </div>
          
          {/*Text Content*/}
          <div className="nextensio__possibility-content">
            <TextTemplate title={t('text-title-2')}
                          text={t('text-content-2')}/>
          </div>
        </div>

        {/*Container #3*/}
        <div className="nextensio__possibility_rightText">
          {/*Image*/}
          <div className="nextensio__possibility-leftImage">
            <img src={geartriangle} alt="geartriangle" />
          </div>

          {/*Text Content*/}
          <div className="nextensio__possibility-content">
            <TextTemplate title={t('text-title-3')}
                          text={t('text-content-3')}/>
            <div className="nextensio__possibility-list">
              {/*Use of Bulletpoint template*/}
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-1')}/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-2')}/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text={t('bulletpoint-3')}/>
            </div>
          </div>

        </div>
        
        {/*Because of the sticky navBAR, the ID position is adjusted for optimal positioning*/}
        <div className="placeholder" id="blog"></div>
        
    </div>
  )
}

export default Possibility