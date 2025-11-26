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
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import PlanoEmpresarial from './pages/PlanoEmpresarial';
import PlanoPME from './pages/PlanoPME';
import PlanoIndividual from './pages/PlanoIndividual';
import PlanosEspeciais from './pages/PlanosEspeciais';
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
          <Route path="/noticias" element={<News />} />
          <Route path="/noticias/:slug" element={<NewsArticle />} />
          <Route path="/plano-empresarial" element={<PlanoEmpresarial />} />
          <Route path="/plano-pme" element={<PlanoPME />} />
          <Route path="/plano-individual" element={<PlanoIndividual />} />
          <Route path="/planos-especiais" element={<PlanosEspeciais />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

