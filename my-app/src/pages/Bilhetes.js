import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bilhetes.css';
import FiltroPopup from '../popups/FiltroPopup';
import BackButton from '../components/BackButton';
import HelpButton from '../components/HelpButton';
import CancelButton from '../components/CancelButton'

const Bilhetes = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    maquina: false,
    valor: false,
    origem: false,
    destino: false,
    children: false,
    elders: false,
    disabled: false,
    wc: false,
    wifi: false
  });
  const [bilhetes, setBilhetes] = useState([
    { id: 1, preco: '5€', data: '12/08/2021', hora: '10:20', origem: 'Lisboa', destino: 'Porto', maquina: 'XLZ', children: false, elders: false, disabled: true, wc: true, wifi: false },
    { id: 2, preco: '12€', data: '12/08/2021', hora: '10:35', origem: 'Lisboa', destino: 'Porto', maquina: 'XYZ', children: true, elders: false, disabled: true, wc: true, wifi: false },
    { id: 3, preco: '38€', data: '12/08/2021', hora: '10:50', origem: 'Lisboa', destino: 'Porto', maquina: 'QWE', children: true, elders: true, disabled: true, wc: true, wifi: false },
    { id: 4, preco: '42€', data: '12/08/2021', hora: '11:05', origem: 'Lisboa', destino: 'Porto', maquina: 'RTY', children: false, elders: true, disabled: true, wc: true, wifi: true },
    { id: 5, preco: '90€', data: '12/08/2021', hora: '11:20', origem: 'Lisboa', destino: 'Porto', maquina: 'CDE', children: true, elders: false, disabled: false, wc: true, wifi: false },
    { id: 6, preco: '21€', data: '12/08/2021', hora: '11:35', origem: 'Lisboa', destino: 'Porto', maquina: 'FGH', children: false, elders: true, disabled: true, wc: true, wifi: true },
    { id: 7, preco: '17€', data: '12/08/2021', hora: '11:50', origem: 'Lisboa', destino: 'Porto', maquina: 'JKL', children: true, elders: true, disabled: true, wc: true, wifi: true },
    { id: 8, preco: '33€', data: '12/08/2021', hora: '12:05', origem: 'Lisboa', destino: 'Porto', maquina: 'MNO', children: true, elders: true, disabled: false, wc: false, wifi: true },
    { id: 9, preco: '29€', data: '12/08/2021', hora: '12:20', origem: 'Lisboa', destino: 'Porto', maquina: 'PQR', children: true, elders: false, disabled: true, wc: true, wifi: false },
    { id: 10, preco: '47€', data: '12/08/2021', hora: '12:35', origem: 'Lisboa', destino: 'Porto', maquina: 'STU', children: true, elders: true, disabled: false, wc: false, wifi: true }
  ]);
  
  const [bilhetes2, setBilhetes2] = useState([
    { id: 5, preco: '90€', data: '12/08/2021', hora: '11:20', origem: 'Lisboa', destino: 'Porto', maquina: 'CDE', children: true, elders: false, disabled: false, wc: true, wifi: false },
    { id: 10, preco: '47€', data: '12/08/2021', hora: '12:35', origem: 'Lisboa', destino: 'Porto', maquina: 'STU', children: true, elders: true, disabled: false, wc: false, wifi: true },
    { id: 4, preco: '42€', data: '12/08/2021', hora: '11:05', origem: 'Lisboa', destino: 'Porto', maquina: 'RTY', children: false, elders: true, disabled: true, wc: true, wifi: true },
    { id: 3, preco: '38€', data: '12/08/2021', hora: '10:50', origem: 'Lisboa', destino: 'Porto', maquina: 'QWE', children: true, elders: true, disabled: true, wc: true, wifi: false },
    { id: 8, preco: '33€', data: '12/08/2021', hora: '12:05', origem: 'Lisboa', destino: 'Porto', maquina: 'MNO', children: true, elders: true, disabled: false, wc: false, wifi: true },
    { id: 9, preco: '29€', data: '12/08/2021', hora: '12:20', origem: 'Lisboa', destino: 'Porto', maquina: 'PQR', children: true, elders: false, disabled: true, wc: true, wifi: false },
    { id: 6, preco: '21€', data: '12/08/2021', hora: '11:35', origem: 'Lisboa', destino: 'Porto', maquina: 'FGH', children: false, elders: true, disabled: true, wc: true, wifi: true },
    { id: 7, preco: '17€', data: '12/08/2021', hora: '11:50', origem: 'Lisboa', destino: 'Porto', maquina: 'JKL', children: true, elders: true, disabled: true, wc: true, wifi: true },
    { id: 2, preco: '12€', data: '12/08/2021', hora: '10:35', origem: 'Lisboa', destino: 'Porto', maquina: 'XYZ', children: true, elders: false, disabled: true, wc: true, wifi: false },
    { id: 1, preco: '5€', data: '12/08/2021', hora: '10:20', origem: 'Lisboa', destino: 'Porto', maquina: 'XLZ', children: false, elders: false, disabled: true, wc: true, wifi: false },
  ]);


  const [filteredBilhetes, setFilteredBilhetes] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setFilteredBilhetes(bilhetes);
  }, [bilhetes]);

  const handleApplyFilters = () => {
    let result = bilhetes;

    if (filters.price) {
      result = result.sort((a, b) => parseFloat(b.preco) - parseFloat(a.preco));
    }

    if (filters.hour) {
      result = result.sort((a, b) => {
        let aHour = a.hora.split(':');
        let bHour = b.hora.split(':');
        return aHour[0] - bHour[0] || aHour[1] - bHour[1];
      });
    }

    if (filters.children) {
      result = result.filter(bilhete => bilhete.children === true);
    }
    if (filters.elders) {
      result = result.filter(bilhete => bilhete.elders === true);
    }
    if (filters.disabled) {
      result = result.filter(bilhete => bilhete.disabled === true);
    }
    if (filters.wc) {
      result = result.filter(bilhete => bilhete.wc === true);
    }
    if (filters.wifi) {
      result = result.filter(bilhete => bilhete.wifi === true);
    }

    setFilteredBilhetes(result);
    setShowFilters(false);
    console.log('Filtros aplicados', result);
  };

  return (
    <div className="bilhetes-page">
      <div className="header">
        <h1>Escolha o Seu Bilhete</h1>
        <HelpButton defaultHelp='Deve clicar na "Caixa" que contem o bilhete que pretende comprar, pode filtrar os bilhetes para reduzir o numero de bilhetes.'></HelpButton>
      </div>
      <div className="bilhetes-container">
        {filteredBilhetes.length > 0 ? (
          filteredBilhetes.map((bilhete) => (
            <button key={bilhete.id} className="bilhete" onClick={() => navigate('/bilhetesinfo')}>
              <p>Preço: {bilhete.preco}</p>
              <p>Data: {bilhete.data}</p>
              <p>Hora: {bilhete.hora}</p>
              <p>Origem: {bilhete.origem}</p>
              <p>Destino: {bilhete.destino}</p>
            </button>
          ))
        ) : (
          <p>Não há bilhetes que correspondam aos filtros.</p>
        )}
      </div>
      <div className="footer">
        <CancelButton></CancelButton>
        <button className="filter-button" onClick={() => setShowFilters(true)}>Filtros</button>
        {showFilters && <FiltroPopup onClose={() => setShowFilters(false)} onApply={handleApplyFilters} filters={filters} setFilters={setFilters} />}
        <BackButton></BackButton>
      </div>
    </div>
  );
}

export default Bilhetes;
