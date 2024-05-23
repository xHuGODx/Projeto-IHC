import React, { useState } from 'react';
import MetodoPagamento from './MetodoPagamento';
import PagamentoPopup from './PagamentoPopup';

const MetodoPagamentoPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePagar = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <MetodoPagamento onPagar={handlePagar} />
      {showPopup && <PagamentoPopup />}
    </div>
  );
}

export default MetodoPagamentoPage;
