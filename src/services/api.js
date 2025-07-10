
// Este archivo contendrá la lógica para interactuar con tu API de backend (por ejemplo, Supabase).

// Ejemplo de una función para obtener publicaciones
export const getPosts = async () => {
  const res = await fetch('http://localhost:5000/api/publicaciones');
  const publicaciones = await res.json();

  // Obtener usuarios únicos
  const userIds = [...new Set(publicaciones.map(p => p.usuario_id))];

  const usersData = await Promise.all(userIds.map(async id => {
    const res = await fetch(`http://localhost:5000/api/usuarios/${id}`);
    const user = await res.json();
    return { id, nombre: user.nombre || "Usuario" };
  }));

  const userMap = Object.fromEntries(usersData.map(u => [u.id, u.nombre]));

  // Reemplazar usuario_id por nombre
  return publicaciones.map(p => ({
    ...p,
    usuario: userMap[p.usuario_id] || "Usuario"
  }));
};

// Ejemplo de una función para iniciar sesión
export const loginUser = async (email, password) => {
    console.log(`Attempting to log in user ${email}...`);
    // Lógica de autenticación con el backend
    return Promise.resolve({ id: '1', name: 'Usuario de Prueba', email });
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch('http://localhost:5000/api/usuarios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al registrar el usuario');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};