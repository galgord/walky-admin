import './index.css';

import React from 'react';

import billingIcon from '../../../assets/billing.png';
import logoutIcon from '../../../assets/logout.png';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
        <span className='footer-text'>ACCOUNT</span>
        <div className='divider'/>
        <div className='footer-row'>
          <span className='footer-text'>Billing</span>
          <img src={billingIcon} className='billing-image' alt="Billing Icon" draggable="false" />
        </div>
        <div className='footer-row'>
          <span className='footer-text'>Logout</span>
          <img src={logoutIcon} className='logout-image' alt="Logout Icon" draggable="false" />
        </div>
      </div>
  )
}

export default Footer