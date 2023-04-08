import './index.css';

import React, { useState } from 'react';

import billingIcon from '../../assets/billing.png';
import logoutIcon from '../../assets/logout.png';
import { MENU_ITEMS } from './constants';
import Header from './Header';
import MenuItem from './MenuItem';

const Sidebar: React.FC = () => {
  const [currentIdex, setCurrentIndex] = useState(0);

  return (
    <div className='sideBar'>
       <Header/>
       <div style={{marginTop: '80px'}}>
       {MENU_ITEMS.map((item, index) => {
          return <MenuItem key={index} {...item} isSelected={index === currentIdex} onClick={() => setCurrentIndex(index)}/>
        })
       }
       </div>
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
    </div>
  )
}

export default Sidebar;