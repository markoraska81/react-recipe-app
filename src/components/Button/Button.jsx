import React from 'react';
import './Button.scss';

const Button = ({ children, name, disabled, type }) => {
  const btnClasses = () => {
    if (name === 'search') {
      return 'search';
    }

    if (name === 'recipe') {
      return 'recipe';
    }
  };

  return (
    <>
      <button className={`btn-${btnClasses()}`} disabled={disabled} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
