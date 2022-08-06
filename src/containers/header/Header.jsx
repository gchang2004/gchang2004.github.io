import React from 'react';
import './header.css';
//import people from '../../assets/vectorjuice_collab.png';
import privacy from '../../assets/vectorjuice_privacy.png';

const Header = () => {
  return (
    /*Header main skeleton and ID refrence*/
    <div className="nextensio__header section__padding">
        
        {/*Header content*/}
        <div className="nextensio__header-content">
          {/*Heading + Subheading text*/}
          <h1 className="gradient__text">Cloud Infrastructure for Borderless Enterprise</h1>
          <div className="nextensio__header-content-animation">
            <p>We make your multi-cloud applications portable.</p>
          </div>
          
          {/*Header buttons*/}
          <div className="nextensio__header-content__input">
            <button type="button">Get Our White Paper</button>
            <div className='nextensio__header-content__input-explore'>
              <a href='#blog'><button type="button">Learn More</button></a>
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