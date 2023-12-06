
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Filmes } from './pages/Filmes';
import { InfoFilmes } from './pages/InfoFilme';
import { Home } from './pages/Home';

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
