import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context'; 


const PrivateRoute = ({ children }) => {
  const { auth } = useAuth(); // Obter estado de autenticação

  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
