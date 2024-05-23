import React from 'react';
import './HelpButton.css';

const HelpButton = ({ onClick, defaultHelp }) => {
  const handleClick = onClick || (() => defaultHelpAlert(defaultHelp));
  
  return (
    <button className="help-button" onClick={handleClick}>
      Ajuda?
    </button>
  );
}

const defaultHelpAlert = (helpText) => {
  alert(helpText || "Ajuda ainda não configurada!");
}

export default HelpButton;
