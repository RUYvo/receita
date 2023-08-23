import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NovaReceita() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaReceita = {
      id: Date.now(),
      titulo,
      ingredientes: ingredientes.split('\n'),
      modoPreparo,
    };

    const receitasExistentes = JSON.parse(localStorage.getItem('receitas')) || [];

    const novasReceitas = [...receitasExistentes, novaReceita];

    localStorage.setItem('receitas', JSON.stringify(novasReceitas));

    navigate('/');
  };

  return (
    <div>
      <h1>Adicionar Nova Receita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ingredientes:</label>
          <textarea
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Modo de Preparo:</label>
          <textarea
            value={modoPreparo}
            onChange={(e) => setModoPreparo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default NovaReceita;
