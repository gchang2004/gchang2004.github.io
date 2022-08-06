import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className="nextensio__features-container">
        {/*Features title*/}
        <div className="nextensio__features-container__feature-title">
          <div /> {/* <= used as the gradient bar above each subheading*/}
          <h1>{title}</h1>
        </div>
        
        {/*Features text*/}
        <div className="nextensio__features-container__feature-text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature