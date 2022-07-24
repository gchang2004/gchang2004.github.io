import React from 'react';
import { Feature } from '../../components';
import './features.css';

//dynamic constants => structured as arrays
const featuresData = [
  {
    title: 'testing1',
    text: 'Text #1',
  },

  {
    title: 'testing2',
    text: 'Text #2',
  },

  {
    title: 'testing',
    text: 'Text #3',
  },  
  
]

const Features = () => {
  return (
    <div className="nextensio__features section__padding" id="features">
        {/*Maing Features Heading + Subheading */}
        <div className="nextensio__features-heading">
          <h1 className="gradient__text"> High ROI</h1>
          <p>Request Early Access to Get Started</p>
        </div>

        {/*Using Pre-made Features Component as array format*/}
        <div className="nextensio__features-container">
          {featuresData.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}/>
          ))}
        </div>
    </div>
  )
}

export default Features