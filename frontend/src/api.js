import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Configuração de autenticação
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Recuperando o token do localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const getSkins = () => api.get('/skins');
export const addSkin = (skin) => api.post('/skins', skin);
export const editSkin = (id, skin) => api.put(`/skins/${id}`, skin);
export const deleteSkin = (id) => api.delete(`/skins/${id}`);
