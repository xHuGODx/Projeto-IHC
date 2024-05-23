import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ViagensRecentes.css';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';

const ViagensRecentes = () => {
  const bilhetes = [
    { id: 2, preco: '90€', data: '28/04/2021', hora: '11:20', origem: 'Lisboa', destino: 'Porto', pago: true }
  ];
  let navigate = useNavigate();

  return (
    <div className="viagensrecentes-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Histórico de Viagens</h1>
      <HelpButton></HelpButton>
      <div className="ViagensRecentes">
        {bilhetes.length > 0 ? (
          bilhetes.map((bilhete) => (
            <button key={bilhete.id} className="bilhete">
              <p>Preço: {bilhete.preco}</p>
              <p>Data: {bilhete.data}</p>
              <p>Hora: {bilhete.hora}</p>
              <p>Origem: {bilhete.origem}</p>
              <p>Destino: {bilhete.destino}</p>
            </button>
          ))
        ) : (
          <p>Ainda não efetuou nenhuma viagem.</p>
        )}
      </div>
      <BackButton></BackButton>
    </div>
  );
}

export default ViagensRecentes;