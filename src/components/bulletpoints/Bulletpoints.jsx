import React from 'react';
import './bulletpoints.css';

const Bulletpoints = ({svg, text}) => {
  return (
    <div className="nextensio__bulletpoints-container">
        {/*Bulletpoint skeleton*/}
        {svg}
        <h3>{ text }</h3>
    </div>
  )
}

export default Bulletpoints