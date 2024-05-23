import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
//<button className="button" disabled={true} onClick={() => navigate('/bilhetedevolta')}>Bilhete de Volta</button>

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to ViajarSenior!</h1>
      </div>
      <h2>‎ </h2>
      <div>
        <button className="button" onClick={() => navigate('/viajar')}>Viajar de comboio</button>
        <button className="button" onClick={() => navigate('/perfil')}>Perfil</button>
        <button className="button" onClick={() => navigate('/bilhetesativos')}>Os seus bilhetes</button>
        <button className="button" onClick={() => navigate('/sugestoes')}>Sugestões de Viagem</button>
      </div>
    </div>
  );
}

export default Home;
