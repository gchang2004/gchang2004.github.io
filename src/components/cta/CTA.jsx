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
          <p>Many companies find that constantly maintaining their current system consumes their IT budget for new technology. By subscribing to our service, you can focus on what you do best -- running your business.</p>
        </div>

        {/*Email + Button*/}
        <div className="nextensio__cta-interact">
          <input type="email" id="email" placeholder='Your company email' autoComplete='email'/>
          <a href='https://controller.nextensio.net/signup'>
            <button type="button">Get Started</button>
          </a>
        </div>

    </div>
  )
}

export default CTA