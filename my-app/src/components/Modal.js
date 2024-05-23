// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button className="confirm-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
