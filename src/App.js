import { Filmes } from './pages/Filmes';
import { InfoFilmes } from './pages/InfoFilme';
import { Home } from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:searchTerm" element={<Filmes />} />
        <Route path="/info-filmes/:id" element={<InfoFilmes />} />
      </Routes>
    </Router>
  );
}

export default App;