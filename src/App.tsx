import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MentionsLegales from './pages/legal/MentionsLegales';
import PolitiqueConfidentialite from './pages/legal/PolitiqueConfidentialite';
import CGU from './pages/legal/CGU';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="mentions-legales" element={<MentionsLegales />} />
          <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="cgu" element={<CGU />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
