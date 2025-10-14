import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Duvidas from './pages/Duvidas';
import Ouvidoria from './pages/Ouvidoria';
import Downloads from './pages/Downloads';
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
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/planos-atendidos" element={<PlanosAtendidos />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

