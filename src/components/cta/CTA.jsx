import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className="nextensio__cta">
        {/*Text content*/}
        <div className="nextensio__cta-content">
          {/*Title + Gradient Logo*/}
          <div className="nextensio__cta-content-title">
            <h2>Get started with</h2>
            <h2 className="gradient__text">Nextensio</h2>
          </div>
          <p>Join 100+ customers already using Nextensio cloud technology to maximize performance. Start your free trial today.</p>
        </div>

        {/*Email + Button*/}
        <div className="nextensio__cta-interact">
          <input type="email" id="email" placeholder='Your company email'/>
          <button type="button">Get Started</button>
        </div>

    </div>
  )
}

export default CTA