import React, { useState } from 'react';
import './Pagamento.css';
import PagamentoMbway from '../popups/PagamentoMbway';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import CancelButton from '../components/CancelButton'

const Pagamento = () => {
  const [telefone, setTelefone] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirmar = () => {
    if (telefone.length === 9) {
      setShowPopup(true);
    } else {
      alert("Por favor, insira um número de telefone válido com 9 dígitos.");
    }
  };

  const handleNumericInput = (event) => {
    const value = event.target.value;
    const re = /^[0-9\b]+$/;

    if ((value === "" || re.test(value)) && value.length <= 9) {
      setTelefone(value);
    }
  };

  return (
    <div className="pagamento-container">
      <h2>‎ </h2>
      <h2>‎ </h2>
      <h1>Insira o seu número telefónico</h1>
      <h2>‎ </h2>
      <HelpButton defaultHelp='Deve inserir o número de telemóvel, para proceder ao pagamento MBWay.'></HelpButton>
      <input
        type="text"
        value={telefone}
        onChange={handleNumericInput}
        maxLength="9"
        placeholder="Seu número"
        className="telefone-input"
      />
      <h2>‎ </h2>
      <h2>‎ </h2>
      <button onClick={handleConfirmar} className="confirm-button">Pagar</button>
      <h2>‎ </h2>
      <CancelButton></CancelButton>
      {showPopup && <PagamentoMbway />}
      <BackButton></BackButton>
    </div>
  );
}

export default Pagamento;
