import React from 'react';
import './possibility.css';
import { TextTemplate } from '../../components';
import { Bulletpoints } from '../../components';
import { RiCheckLine } from 'react-icons/ri';
import { infinite, geartriangle, lock} from './imports'; 

const Possibility = () => {
  return (
    <div className="nextensio__possibility section__padding" id="possibility">
        {/*Container #1*/}
        <div className="nextensio__possibility_rightText">
          {/*Image*/}
          <div className="nextensio__possibility-leftImage">
            <img src={infinite} alt="infinite" />
          </div>

          {/*Text Content*/}
          <div className="nextensio__possibility-content">
            <TextTemplate title='Emergence of Cloud Adoptions'
                          text='Nextensio envisions that the center of an enterprise network is progressively inverting from LAN to WAN. Cloud applications of the future demand immersive user experience with secure access everywhere, transforming enterprises into borderless enterprise network.'
                          link="Learn how Nextensio solves this challenge"/>
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
            <TextTemplate title='Enterprise Security is Constantly Evolving'
                          text='Enterprise applications access and security postures are shifting from static, network-based to portable, fine-grained and identity-based control. Nextensio combines application and networking policies to securely deliver, control and monitor distributed applications. '/>
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
            <TextTemplate title='Simple. Affordable. Magic.'
                          text='Nextensio uses zero networking construct for simplicity and uses user-identity attributes from the source to control application access.'/>
            <div className="nextensio__possibility-list">
              {/*Use of Bulletpoint template*/}
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text="Secure and lower cost of ownership"/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text="Application portability with unlimted customizations"/>
              <Bulletpoints
                svg={<RiCheckLine size={30}/>}
                text="Manageability at scale for all operations"/>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default Possibility