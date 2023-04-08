import './index.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { MenuItemProps } from './types';

const MenuItem = ({isSelected, linkTo, text, icon, onClick}: MenuItemProps) => {
  return (
   <Link to={linkTo} className='menu-item-container' onClick={onClick}>
      <div className='menu-item' style={{opacity: isSelected ? 1 : 0.5}}>
      <img src={icon} className='insights-image' alt="Insight Icon" draggable="false" />
      <div>
        <span className='text'>{text}</span>
        {isSelected ?<div className='white-line'/> : null}
      </div>
      </div>
   </Link>
  )
}

export default MenuItem