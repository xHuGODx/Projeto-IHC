import React from 'react';
import './ConfirmButton.css';
import { useNavigate } from 'react-router-dom';

const ConfirmButton = ({nextPath, buttonText}) => {
  const navigate = useNavigate();

  if (!buttonText) buttonText = 'Confimar';

  return (
    <button className="confirm-button" onClick={() => navigate(nextPath)}>
      {buttonText}
    </button>
  );
}

export default ConfirmButton;
