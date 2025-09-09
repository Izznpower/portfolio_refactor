import React, { useState } from 'react';

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMobileNav = () => {
    const newState = !isActive;
    setIsActive(newState);
    document.body.classList.toggle('mobile-nav-active', newState);
  };

  return (
    <i 
      className={`mobile-nav-toggle d-xl-none ${isActive ? 'bi-x' : 'bi-list'}`}
      onClick={toggleMobileNav}
      style={{ cursor: 'pointer', fontSize: '24px' }}
    />
  );
};

export default MobileNav;