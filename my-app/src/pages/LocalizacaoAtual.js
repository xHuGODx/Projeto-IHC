import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocalizacaoAtual.css';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import CancelButton from '../components/CancelButton';

const LocalizacaoAtual = () => {
  const [destino, setDestino] = useState('');
  const [hora, setHora] = useState('');
  const [minutos, setMinutos] = useState('');
  const [isDestinoError, setIsDestinoError] = useState(false);
  const [isHoraError, setIsHoraError] = useState(false);
  const [isMinutosError, setIsMinutosError] = useState(false);
  let navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;
    if (!destino) {
      setIsDestinoError(true);
      isValid = false;
    } else {
      setIsDestinoError(false);
    }

    if (!hora) {
      setIsHoraError(true);
      isValid = false;
    } else {
      setIsHoraError(false);
    }

    if (!minutos) {
      setIsMinutosError(true);
      isValid = false;
    } else {
      setIsMinutosError(false);
    }

    return isValid;
  };

  const handleConfirmClick = () => {
    if (validateFields()) {
      navigate('/bilhetes');
    }
  };

  // Função para garantir que apenas números sejam inseridos
  const handleNumericInput = (value, setter, max) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue === '' || (numericValue >= 0 && numericValue <= max)) {
      setter(numericValue);
    }
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="localizacao-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Insira o Seu Destino</h1>
      <HelpButton defaultHelp='Escolheu a localização atual (Aveiro), agora deve preencher os campos com o seu destino e a hora a partir da qual está disponível para apanhar o comboio.'></HelpButton>
      <div className="destino-input-container">
        <div className="input-wrapper">
          <input
            type="text"
            id="destino"
            className={isDestinoError ? 'input-error' : ''}
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            placeholder="Digite o destino pretendido"
          />
          {isDestinoError && <span className="error-icon">⚠️</span>}
        </div>
      </div>
      <h2>‎ </h2>
      <div className="hora-partida-container">
        <h1>Insira a Hora de Partida</h1>
        <div className="time-inputs">
          <div className="input-wrapper">
            <input
              type="text"
              id="hora"
              style={{ width: '50px' }}
              className={isHoraError ? 'input-error' : ''}
              value={hora}
              onChange={(e) => handleNumericInput(e.target.value, setHora, 23)}
              placeholder="HH"
              maxLength="2"
            />
            {isHoraError && <span className="error-icon">⚠️</span>}
          </div>
          <span>:</span>
          <div className="input-wrapper">
            <input
              style={{ width: '50px' }}
              type="text"
              id="minutos"
              className={isMinutosError ? 'input-error' : ''}
              value={minutos}
              onChange={(e) => handleNumericInput(e.target.value, setMinutos, 59)}
              placeholder="MM"
              maxLength="2"
            />
            {isMinutosError && <span className="error-icon">⚠️</span>}
          </div>
        </div>
      </div>
      <h2>‎ </h2>
      <button className='confirm-button' onClick={handleConfirmClick}>Continuar</button>
      <h2>‎ </h2>
      <CancelButton></CancelButton>
      <BackButton></BackButton>
    </div>
  );
}

export default LocalizacaoAtual;
