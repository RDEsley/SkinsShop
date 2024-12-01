import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSkins, editSkin } from '../api';

const edititem = () => {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Buscar os dados da skin com base no id
    const fetchSkin = async () => {
      try {
        const response = await getSkins();
        const skin = response.data.find((s) => s._id === id);
        if (skin) {
          setNome(skin.nome);
          setPreco(skin.preco);
          setImagem(skin.imagem);
        }
      } catch (error) {
        console.log('Erro ao buscar skin:', error);
      }
    };

    fetchSkin();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSkin = { nome, preco, imagem };

    try {
      await editSkin(id, updatedSkin);
      navigate('/items'); // Redireciona para a lista de itens após editar
    } catch (error) {
      console.log('Erro ao editar skin:', error);
    }
  };

  return (
    <div>
      <h2>Editar Skin</h2>
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default edititem;
