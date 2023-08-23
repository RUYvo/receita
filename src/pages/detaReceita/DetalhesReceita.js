import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetalhesReceita() {
  const { id } = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    const receitasObtidas = JSON.parse(localStorage.getItem('receitas')) || [];
    const receitaEncontrada = receitasObtidas.find((r) => r.id === parseInt(id));
    setReceita(receitaEncontrada);
  }, [id]);

  if (!receita) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{receita.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
        {receita.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Modo de Preparo</h2>
      <p>{receita.modoPreparo}</p>
    </div>
  );
}

export default DetalhesReceita;
