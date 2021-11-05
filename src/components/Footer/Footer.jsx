import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="copyright">
          &copy; <span className="date">{new Date().getFullYear()}</span>. Marko
          Milenkovic design.
        </p>
      </footer>
    </>
  );
};

export default Footer;
