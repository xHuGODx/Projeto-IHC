import React, { useEffect, useState } from 'react';
import './PagamentoPopup.css';
import { useNavigate } from 'react-router-dom';

const PagamentoMbway = () => {
  const [status, setStatus] = useState("À espera do pagamento");
  const [icon, setIcon] = useState("📱");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("Pagamento Confirmado");
      setIcon("✅");

      // Redireciona para a página inicial após 3 segundos
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 3000); // Simula o tempo do pagamento

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="pagamento-popup-container">
      <div className="popup-content">
        <span className="mbway-icon">{icon}</span>
        <h1>{status}</h1>
      </div>
    </div>
  );
}

export default PagamentoMbway;
