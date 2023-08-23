import React from 'react';
import ListaReceitas from './pages/listReceitas/ListaReceitas';
import DetalhesReceita from './pages/detaReceita/DetalhesReceita';
import NovaReceita from './pages/addReceita/NovaReceita';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListaReceitas />} />
        <Route path="/detalhes/:id" element={<DetalhesReceita />} />
        <Route path="/adicionar" element={<NovaReceita />} />
      </Routes>
    </Router>
  );
}

export default App;
