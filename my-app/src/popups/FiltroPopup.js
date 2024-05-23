// FiltroPopup.js
import React from 'react';
import './FiltroPopup.css';

const FiltroPopup = ({ onClose, onApply, filters, setFilters }) => {
  const handleFilterChange = (key) => {
    setFilters({...filters, [key]: !filters[key]});
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h1>Filtros</h1>
        <div className="filters">
          <label>
            <input type="checkbox" checked={filters.children} onChange={() => handleFilterChange('children')} /> Permite Crianças
          </label>
          <label>
            <input type="checkbox" checked={filters.elders} onChange={() => handleFilterChange('elders')} /> Permite Idosos
          </label>
          <label>
            <input type="checkbox" checked={filters.disabled} onChange={() => handleFilterChange('disabled')} /> Permite Deficientes
          </label>
          <label>
            <input type="checkbox" checked={filters.wifi} onChange={() => handleFilterChange('wifi')} /> Tem Wifi
          </label>
          <label>
            <input type="checkbox" checked={filters.wc} onChange={() => handleFilterChange('wc')} /> Tem WC
          </label>
        <h1>Ordenar</h1>
          <label>
            <input type="checkbox" checked={filters.price} onChange={() => handleFilterChange('price')} /> Mais Caro
          </label>
          <label>
            <input type="checkbox" checked={filters.hour} onChange={() => handleFilterChange('hour')} /> Mais Cedo
          </label>

        </div>
        <div className="popup-buttons">
          <button onClick={onApply} className="apply-button">Aplicar Filtros</button>
          <button onClick={onClose} className="close-button">Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default FiltroPopup;
