import React, { useContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Mudança aqui
import { AuthProvider, useAuth } from '../context';
import Login from './components/login';
import ItemList from './components/itemlist';
import AddItem from './components/additem';
import EditItem from './components/edititem';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { auth } = useAuth(); // Usando o contexto para verificar se o usuário está autenticado
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula a verificação do token
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  // Definindo as rotas usando o createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/items",
      element: auth ? <ItemList /> : <Login />, // Verificando se está autenticado
    },
    {
      path: "/add-item",
      element: auth ? <AddItem /> : <Login />,
    },
    {
      path: "/edit-item/:id",
      element: auth ? <EditItem /> : <Login />,
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} /> {/* Alteração aqui */}
    </AuthProvider>
  );
}

export default App;
