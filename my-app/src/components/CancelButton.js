import React from 'react';
import './CancelButton.css';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  return (
    <button className="cancel-button" onClick={() => navigate('/')}>
      Cancelar
    </button>
  );
}

export default CancelButton;
