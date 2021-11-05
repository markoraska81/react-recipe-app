import React from 'react';
import './Spinner.scss';
import { spinner } from '../../services/Services';

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <img src={spinner} alt="Spinner" />
      </div>
    </>
  );
};

export default Spinner;
