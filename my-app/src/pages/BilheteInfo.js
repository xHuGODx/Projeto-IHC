import React, { useState } from 'react';
import './BilheteInfo.css';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import CancelButton from '../components/CancelButton';
import ConfirmButton from '../components/ConfirmButton';

const BilheteInfo = () => {
  const [quantidade, setQuantidade] = useState("1");

  const navigate = useNavigate();

  const handleNumericInput = (event) => {
    const validChars = new RegExp(/^\d+$/);
    const char = String.fromCharCode(event.which);
    if (!validChars.test(char)) {
      event.preventDefault(); // Impede a entrada de caracteres não numéricos
    }
  };

  const handleChange = (value) => {
    setQuantidade(value);
  };

  return (
    <div className="bilhete-info-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Confirme o Seu Bilhete</h1>
      <HelpButton defaultHelp='Deve confirmar os dados do bilhete que selecionou, e dizer quantos bilhetes quer emitir.'></HelpButton>
      <div className="bilhete-detalhes">
        <p>Origem-Destino: Lisboa-Porto</p>
        <p>Partida: 12/08/2021 às 11:20</p>
        <p>Valor: 90€</p>
        <p>Maquina: CDE</p>
        <p>Permite Crianças: Sim</p>
        <p>Suportes: Idosos, Deficientes</p>
        <p>Extras: WC, Wifi</p>
      </div>
      <div className="quantidade-container">
        <h1>Bilhetes a Emitir</h1>
        <input
          type="text"
          id="quantidade"
          value={quantidade}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(e) => handleNumericInput(e)}
          placeholder="1"
          maxLength="3"
        />
      </div>
      <ConfirmButton nextPath='/metodopagamento' buttonText='Emitir Bilhetes'></ConfirmButton>
      <CancelButton></CancelButton>
      <BackButton></BackButton>
    </div>
  );
}

export default BilheteInfo;
