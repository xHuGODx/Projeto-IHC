import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Sugestoes from './pages/Sugestoes';
import Viajar from './pages/Viajar';
import BilhetesAtivos from './pages/BilhetesAtivos';
import LocalizacaoAtual from './pages/LocalizacaoAtual';
import LocalizacaoOutra from './pages/LocalizacaoOutra';
import Bilhetes from './pages/Bilhetes';
import BilheteInfo from './pages/BilheteInfo';
import MetodoPagamento from './pages/MetodoPagamento';
import Pagamento from './pages/Pagamento';
import ViagensRecentes from './pages/ViagensRecentes';
import BilhetesSugestoes from './pages/BilhetesSugestoes';
// <Route path="/" element={< />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/sugestoes" element={<Sugestoes />} />
        <Route path="/viajar" element={<Viajar />} />
        <Route path="/bilhetesativos" element={<BilhetesAtivos />} />
        <Route path="/localizacaoatual" element={<LocalizacaoAtual />} />
        <Route path="/localizacaooutra" element={<LocalizacaoOutra />} />
        <Route path="/bilhetes" element={<Bilhetes />} />
        <Route path="/bilhetesinfo" element={<BilheteInfo />} />
        <Route path="/metodopagamento" element={<MetodoPagamento />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/viagensrecentes" element={<ViagensRecentes />} />
        <Route path="/bilhetessugestoes" element={<BilhetesSugestoes />} />
      </Routes>
    </Router>
  );
}

export default App;