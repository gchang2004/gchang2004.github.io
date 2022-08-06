import React from 'react';
import './whatNextensio.css';
import { Feature } from '../../components';
import { RiCloudLine, RiShieldUserLine, RiTeamLine } from 'react-icons/ri';
import collab from '../../assets/vectorjuice_collab.png';

const WhatNextensio = () => {
  return (
    <div className="nextensio__whatNextensio section__padding" id='whatNextensio'>
      {/*About Nextensio => primary statement*/}
      <div className="nextensio__whatNextensio-feature" >
        {/*NOTE => not using the imported FEATURE component*/}
        <div className="nextensio__whatNextensio-features-title-block">
          <div />
          <h2>What is Nextensio</h2>
        </div>
        <p>Nextensio is a modern cloud-native infrastructure enabling multi-cloud applications delivery to the edge in minutes.</p>
      </div>

      {/*Image + Subtitle*/}
      <div className='nextensio__whatNextensio-heading'>
        <img src={collab} alt="collab"/>
        <div className='nextensio__whatNextensio-heading__interact'>
          <h1 className="gradient__text">Reimagine the Future of Cloud Computing</h1>
          <div className="nextensio__whatNextensio-heading__interact-input">
            <a href='mailto:support@nextensio.io
                  ?subject=Nextensio%20Support:%20[INSERT%20Name]%20-%20Request%20Demo
                  &body=Type%20Your%20Message%20Here'>
              <button type="button">Request Demo</button>
            </a>
          </div>
        </div>
      </div>

      {/*Three secondary bullet-points about Nextensio*/}
      <div className='nextensio__whatNextensio-container'>
          <div className="nextensio__whatNextensio-container-spacer">
            {/*Bullet-point #1 => Networking*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiCloudLine size={55}/>            
              <Feature title='Networking' text='Support multicloud connectivity for all clouds and deliver the future of work.'/>
            </div>

            {/*Bullet-point #2 => Security*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiShieldUserLine size={55}/>
              <Feature title='Security' text='Simplify end-to-end security while optimizing the application experience.' />
            </div>

            {/*Bullet-point #3 => Scalability*/}
            <div className='nextensio__whatNextensio-container__icons'>
              <RiTeamLine size={55}/>
              <Feature title='Scalability' text='Accelerate and optimize cloud operations for customers and industry partners.' />
            </div>
          </div>
        
      </div>

    </div>
  )
}

export default WhatNextensio