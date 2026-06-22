const BASE_URL = 'http://localhost:3000/api';

export const api = {

  get: async (endpoint) => {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Error GET en ${endpoint}`);
    return res.json();
  },

  post: async (endpoint, data) => {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  put: async (endpoint, id, data) => {
    const res = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },

 
  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Credenciales inválidas');
    return res.json();
  },

  // Usuarios
  getUsuarios: () => api.get('usuarios'),
  crearUsuario: (data) => api.post('usuarios', data),
  updateUsuario: (id, data) => api.put('usuarios', id, data),

  // Activos
  getActivos: () => api.get('activos'),
  crearActivo: (data) => api.post('activos', data),
};