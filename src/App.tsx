import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Duvidas from './pages/Duvidas';
import Ouvidoria from './pages/Ouvidoria';
import CanalEtico from './pages/CanalEtico';
import Downloads from './pages/Downloads';
import ParaDentistas from './pages/ParaDentistas';
import ParaPacientes from './pages/ParaPacientes';
import PlanosAtendidos from './pages/PlanosAtendidos';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />
          <Route path="/canal-etico" element={<CanalEtico />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/para-dentistas" element={<ParaDentistas />} />
          <Route path="/para-pacientes" element={<ParaPacientes />} />
          <Route path="/planos-atendidos" element={<PlanosAtendidos />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

