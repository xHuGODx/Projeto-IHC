import React from 'react';
import './Sugestoes.css';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import { useNavigate } from 'react-router-dom';

const Sugestoes = () => {
  let navigate = useNavigate();

  return (
    <div className="sugestoes-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Sugestões de Viagens</h1>
      <h2>‎ </h2>
      <HelpButton></HelpButton>
      <button className="suggestion">
        <h2>Festival do Porto</h2>
        <p>Data: 28/12/2021 até 31/12/2021</p>
        <p>Horário: 09:00 às 16:00</p>
      </button>
      <button className="suggestion" onClick={() => navigate('/bilhetessugestoes')}>
        <h2>Feira de Lisboa</h2>
        <p>Data: 03/01/2022 até 09/01/2022</p>
        <p>Horário: 12:00 às 23:00</p>
      </button>
      <BackButton></BackButton>
    </div>
  );
}

export default Sugestoes;
