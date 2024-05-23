import React, { useEffect } from 'react';
import './Viajar.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import CancelButton from '../components/CancelButton';

const Viajar = () => {
let navigate = useNavigate();

useEffect(() => {
  document.body.classList.add('no-scroll');

  return () => {
    document.body.classList.remove('no-scroll');
  };
}, []);

  return (
    <div className="viajar-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Escolha a Sua Localização de Partida</h1>
      <h2>‎ </h2>
      <HelpButton defaultHelp='Nesta Pagina deve escolher a sua localizacao de Partida, "Usar Localização Atual" (Aveiro) ou "Escolher Outra Localização"'></HelpButton>
      <div className="options-container">
        <button className="travel-option" onClick={() => navigate('/localizacaoatual')}>
          <span className="icon">📍</span>
          <span className="text">Usar Localização Atual</span>
        </button>
        <button className="travel-option" onClick={() => navigate('/localizacaooutra')}>
          <span className="icon">🗺️</span>
          <span className="text">Outra Localização</span>
        </button>
      </div>
      <CancelButton></CancelButton>
      <BackButton></BackButton>
    </div>
  );
}

export default Viajar;
