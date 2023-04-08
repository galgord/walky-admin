import './index.css';

import React from 'react';

import { MenuItemProps } from './types';

const MenuItem = ({isSelected, onClick, text, icon}: MenuItemProps) => {
  return (
   <div onClick={onClick} className='menu-item-container'>
      <div className='menu-item' style={{opacity: isSelected ? 1 : 0.5}}>
      <img src={icon} className='insights-image' alt="Insight Icon" draggable="false" />
      <div>
        <span className='text'>{text}</span>
        {isSelected ?<div className='white-line'/> : null}
      </div>
      </div>
   </div>
  )
}

export default MenuItem