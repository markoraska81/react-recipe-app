import React, { useContext } from 'react';
import './Modal.scss';
import { GlobalContext } from '../../context/GlobalContext';

const Modal = ({ children }) => {
  const { modal } = useContext(GlobalContext);
  return (
    <>
      {!modal ? null : (
        <div className="modal">
          <div className="modal-overlay">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
