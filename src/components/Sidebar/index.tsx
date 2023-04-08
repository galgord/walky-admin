import './index.css';

import React, { useEffect, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { MENU_ITEMS } from './constants';
import Footer from './Footer';
import Header from './Header';
import MenuItem from './MenuItem';


const Sidebar: React.FC = () => {
  const [currentIdex, setCurrentIndex] = useState(0);

  const handleClicked = (index: number) => {
    setCurrentIndex(index);
  }

  return (
    <>
    <div className='sideBar'>
      <Header />
      <div style={{ marginTop: '80px' }}>
        {MENU_ITEMS.map((item, index) => {
          return <MenuItem key={index} {...item} isSelected={index === currentIdex} onClick={() => handleClicked(index)}  />;
        })}
      </div>
     <Footer/>
    </div>
    <Outlet/>
    </>
  )
}

export default Sidebar;