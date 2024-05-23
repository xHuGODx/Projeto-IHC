import React, { useEffect, useState } from 'react';
import './PagamentoPopup.css';
import { useNavigate } from 'react-router-dom';

const PagamentoEstacao = () => {
  const navigate = useNavigate();

  return (
    <div className="pagamento-popup-container">
      <div className="popup-content">
        <p>Data limite de pagamento:</p>
        <h2>12/08/2021, 15:45</h2>
        <button className="confirm-button" onClick={() => navigate('/')}>Fechar</button>
      </div>
    </div>
  );
}

export default PagamentoEstacao;