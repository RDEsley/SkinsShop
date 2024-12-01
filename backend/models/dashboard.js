import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../../backend/itemlist';

const Dashboard = () => {
  return (
    <div>
      <h2>Painel de Administração</h2>
      <Link to="/add-item">Adicionar Item</Link>
      <ItemList />
    </div>
  );
};

export default Dashboard;
