import React, { createContext, useState, useMemo, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser({ id: '1', name: 'Restaurante de Prueba' });
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const authContextValue = useMemo(() => ({
    user,
    loading,
    setLoading,
    login,
    logout,
  }), [user, loading]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;