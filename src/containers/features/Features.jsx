import React from 'react';
import './features.css';
import space from '../../assets/space.png';

const Features = () => {
  return (
    <div className="nextensio__features section__padding"
        id="features"
        style={{ backgroundImage: `url(${space})` }}>
      {/*Maing Features Heading + Subheading */}
      <div className="nextensio__features-heading">
        <h2>🚀</h2>
        <h1 className="gradient__text">Our Mission</h1>
      </div>
      <h3>The world of technology can be fast-paced and exciting. Our goal is to provide an immersive multi-cloud application experience anytime, anywhere. We like to empower SMB enterprises in their digital transformation with one cloud spend.</h3>
      <p>Read more about Nextensio's Sustainability & Impact report</p>
    </div>
  )
}

export default Features