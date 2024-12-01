import React, { useState } from 'react';
import { addSkin } from '../api';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSkin = { nome, preco, imagem };

    try {
      await addSkin(newSkin);
      navigate('/items'); // Redireciona para a lista de itens após adicionar
    } catch (error) {
      console.log('Erro ao adicionar skin:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Nova Skin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagem URL"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddItem;
