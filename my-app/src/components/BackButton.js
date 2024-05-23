import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      Voltar
    </button>
  );
}

export default BackButton;
