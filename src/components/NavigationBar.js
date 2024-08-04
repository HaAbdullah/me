// NavigationBar.js
import React from 'react';
import './NavigationBar.css';
import { isMobile } from 'react-device-detect';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavigationBar = () => {
  console.log('Is Mobile:', isMobile);
  return (
    <div>
      {isMobile ? (
        <MobileNav />
      ) : (
        <DesktopNav />
      )}
    </div>
  );
};


export default NavigationBar;
