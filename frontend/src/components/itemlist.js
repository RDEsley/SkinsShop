import React, { useEffect, useState } from 'react';
import { getSkins, deleteSkin } from '../api';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await getSkins();
        setSkins(response.data);
      } catch (error) {
        console.error('Erro ao buscar skins:', error);
      }
    };

    fetchSkins();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSkin(id);
      setSkins(skins.filter((skin) => skin._id !== id));
    } catch (error) {
      console.error('Erro ao deletar skin:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Skins</h2>
      <Link to="/add-item">Adicionar Skin</Link>
      <ul>
        {skins.map((skin) => (
          <li key={skin._id}>
            <img src={skin.imagem} alt={skin.nome} width="50" />
            <span>{skin.nome}</span> - <span>${skin.preco}</span>
            <Link to={`/edit-item/${skin._id}`}>Editar</Link>
            <button onClick={() => handleDelete(skin._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
