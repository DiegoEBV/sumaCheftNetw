
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Feed from '@/pages/Feed';
import Perfil from '@/pages/Perfil';
import { useAuth } from '@/hooks/useAuth';
import Loader from '@/components/Loader';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading && !user) {
    // A simple loader can be shown here
    // return <div className="flex justify-center items-center h-screen"><p>Loading...</p></div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={user ? <Navigate to="/feed" /> : <Login />} />
      
      {/* Protected Routes */}
      <Route path="/feed" element={user ? <Feed /> : <Navigate to="/login" />} />
      <Route path="/perfil" element={user ? <Perfil /> : <Navigate to="/login" />} />
      
      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
