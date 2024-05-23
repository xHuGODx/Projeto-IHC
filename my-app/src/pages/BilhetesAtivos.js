import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BilhetesAtivos.css';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import Modal from '../components/Modal'; // Import the Modal component

const BilhetesAtivos = () => {
  const initialBilhetes = [
    { id: 1, preco: '90€', data: '12/08/2021', hora: '11:20', origem: 'Lisboa', destino: 'Porto', pago: false },
    { id: 2, preco: '5€', data: '15/08/2021', hora: '11:20', origem: 'Aveiro', destino: 'Coimbra', pago: true }
  ];

  const [bilhetes, setBilhetes] = useState(initialBilhetes);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State to control modal message

  let navigate = useNavigate();
  const bilhetesPagos = bilhetes.filter(bilhete => bilhete.pago);
  const bilhetesPorPagar = bilhetes.filter(bilhete => bilhete.pago === false);

  const handleCancel = (id) => {
    setBilhetes(prevBilhetes => prevBilhetes.filter(bilhete => bilhete.id !== id));
    setModalMessage('Este bilhete foi cancelado com sucesso');
    setShowModal(true); // Show the modal with the success message
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bilhetesativos-container">
      <HelpButton />
      <Modal show={showModal} message={modalMessage} onClose={closeModal} /> {/* Add Modal component */}
      <div className="BilhetesAtivos">
        <h2>‎ </h2>
        <h2>‎ </h2>
        <h1>Bilhetes Ativos</h1>
        {bilhetesPagos.length > 0 ? (
          bilhetesPagos.map((bilhete) => (
            <div key={bilhete.id} className="bilhete-ativo">
              <p>Preço: {bilhete.preco}</p>
              <p>Data: {bilhete.data}</p>
              <p>Hora: {bilhete.hora}</p>
              <p>Origem: {bilhete.origem}</p>
              <p>Destino: {bilhete.destino}</p>
              <button className="cancel-button" onClick={() => handleCancel(bilhete.id)}>Cancelar</button>
            </div>
          ))
        ) : (
          <p>Não há bilhetes ativos no momento.</p>
        )}
      </div>
      <div className="BilhetesPorPagar">
        <h2>‎ </h2>
        <h2>‎ </h2>
        <h1>À espera de pagamento</h1>
        <h2>‎ </h2>
        {bilhetesPorPagar.length > 0 ? (
          bilhetesPorPagar.map((bilhete) => (
            <div key={bilhete.id} className="bilhete-ativo">
              <p><b>Data limite Pagamento: {bilhete.data}, 15:45</b></p>
              <p>Preço: {bilhete.preco}</p>
              <p>Data: {bilhete.data}</p>
              <p>Hora: {bilhete.hora}</p>
              <p>Origem: {bilhete.origem}</p>
              <p>Destino: {bilhete.destino}</p>
              <button className="cancel-button" onClick={() => handleCancel(bilhete.id)}>Cancelar</button>
            </div>
          ))
        ) : (
          <p>Não há bilhetes à espera de pagamento no momento.</p>
        )}
      </div>
      <h2>‎ </h2>
      <h2>‎ </h2>
      <BackButton />
    </div>
  );
}

export default BilhetesAtivos;
