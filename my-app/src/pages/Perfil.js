import React from 'react';
import './Perfil.css';
import HelpButton from '../components/HelpButton';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  let navigate = useNavigate();

  return (
    <div className="perfil-container">
      <h1>Perfil</h1>
      <HelpButton></HelpButton>
      <div className="user-info">
        <div>
          <p>Nome: Adelaide dos Santos Ferreira</p>
          <p>Email: adelaidesantosferreira@gmail.com</p>
        </div>
        <button className="signout-button">Terminar Sessão</button>
      </div>
      <button className="perfil-button">Dados Pessoais</button>
      <button className="perfil-button">Viagens Favoritas</button>
      <button className="perfil-button" onClick={() => navigate('/viagensrecentes')}>Viagens Recentes</button>
      <div className="personal-data">
        <p>
          <label htmlFor="suggestions-checkbox"> Sugestões de viagens: </label>
          <input type="checkbox" defaultChecked='true' id="suggestions-checkbox" />
        </p>
      </div>
      <div className="language-select">
        <label htmlFor="language">Idioma:</label>
        <select id="language">
          <option>Português</option>
          <option>Inglês</option>
          <option>Espanhol</option>
        </select>
      </div>
      <BackButton></BackButton>
    </div>
  );
}

export default Perfil;
