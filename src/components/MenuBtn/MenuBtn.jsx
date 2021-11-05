import React, { useContext } from 'react';
import './MenuBtn.scss';
import { GlobalContext } from '../../context/GlobalContext';

const MenuBtn = () => {
  const { menuOpen, menuToggle } = useContext(GlobalContext);
  return (
    <>
      <div className="menu-btn" onClick={menuToggle}>
        <div
          className="menu-btn__line"
          style={{
            transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : null,
            transition: 'all 0.3s ease-in-out',
          }}
        ></div>
        <div
          className="menu-btn__line"
          style={{
            opacity: menuOpen ? '0' : '1',
            transition: 'all 0.3s ease-in-out',
          }}
        ></div>
        <div
          className="menu-btn__line"
          style={{
            transform: menuOpen ? 'rotate(-45deg) translate(8px, -8px)' : null,
            transition: 'all 0.3s ease-in-out',
          }}
        ></div>
      </div>
    </>
  );
};

export default MenuBtn;
