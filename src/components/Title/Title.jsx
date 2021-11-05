import React from 'react';
import './Title.scss';

const Title = ({ title }) => {
  return (
    <>
      <div className="section-title">
        <h2>{title}</h2>
        <div></div>
      </div>
    </>
  );
};

export default Title;
