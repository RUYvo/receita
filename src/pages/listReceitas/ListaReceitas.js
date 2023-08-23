import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ListaReceitas() {
  const navigate = useNavigate();
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const receitasArmazenadas = localStorage.getItem('receitas');
    if (receitasArmazenadas) {
      setReceitas(JSON.parse(receitasArmazenadas));
    }
  }, []);

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {receitas.map((receita) => (
          <li key={receita.id}>
            <p>{receita.titulo}</p>
            <button onClick={() => navigate(`/detalhes/${receita.id}`)}>Detalhes</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaReceitas;
