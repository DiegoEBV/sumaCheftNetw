import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import AppRoutes from '@/routes/AppRoutes';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main className="pt-20">
          <AppRoutes />
        </main>
        <Toaster />
      </div>
    </AuthProvider>
  );
}

export default App;