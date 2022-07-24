import React from 'react';
import './texttemplate.css';

const TextTemplate = ({title, text}) => {
  return (
    <div className="nextensio__TextTemplate-container">
        {/*TextTemplate gradient title*/}
        <div className="nextensio__TextTemplate-container__title">
            <h1 className="gradient__text">{title}</h1>
          </div>

        {/*TextTemplate text*/}
        <div className="nextensio__TextTemplate-container__text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default TextTemplate