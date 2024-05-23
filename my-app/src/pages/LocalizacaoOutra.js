import React, { useState } from 'react';
import './LocalizacaoOutra.css';
import HelpButton from '../components/HelpButton';
import BackButton from '../components/BackButton';
import CancelButton from '../components/CancelButton';
import ConfirmButton from '../components/ConfirmButton';

const LocalizacaoOutra = () => {
  const [localizacao, setLocalizacao] = useState('');

  return (
    <div className="localizacao-outra-container">
      <h1>Usar Outra Localização</h1>
      <h2>‎ </h2>
      <HelpButton defaultHelp='Deve preencher o campo com a Localização onde deseja apanhar o comboio.'></HelpButton>
      <input
        type="text"
        value={localizacao}
        onChange={(e) => setLocalizacao(e.target.value)}
        placeholder="Insira a localização desejada"
        className="localizacao-input"
      />
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h2>‎ </h2>
      <ConfirmButton nextPath='/localizacaoatual' buttonText='Continuar'></ConfirmButton>
      <h2>‎ </h2>
      <CancelButton></CancelButton>
      <BackButton></BackButton>
    </div>
  );
}

export default LocalizacaoOutra;
