import React, { useState } from 'react';
import './MetodoPagamento.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import PagamentoEstacao from '../popups/PagamentoEstacao';
import CancelButton from '../components/CancelButton';

const MetodoPagamento = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="metodo-pagamento-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Detalhes do Bilhete</h1>
      <HelpButton defaultHelp='Confirme mais uma vez os detalhes do bilhete, e escolha o seu método de pagamento desejado.'></HelpButton>
      <div className="bilhete-detalhes">
        <p>Origem-Destino: Lisboa-Porto</p>
        <p>Partida: 12/08/2021 às 11:20</p>
        <p>Valor: 90€</p>
        <p>Maquina: CDE</p>
        <p>Permite Crianças: Sim</p>
        <p>Suportes: Idosos, Deficientes</p>
        <p>Extras: WC, Wifi</p>
      </div>
      <h2>‎ </h2>
      <h1>Método de pagamento</h1>
      <div className="botao-container">
        <button className="metodo-button" onClick={() => navigate('/pagamento')}>Pagar por MBWay</button>
        <button className="metodo-button" onClick={() => setShowPopup(true)}>Pagar na estação</button>
        {showPopup && <PagamentoEstacao />}
      </div>
      <h2>‎ </h2>
      <CancelButton></CancelButton>
      <BackButton></BackButton>
    </div>
  );
}

export default MetodoPagamento;
