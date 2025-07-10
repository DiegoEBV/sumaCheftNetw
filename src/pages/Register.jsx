import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { registerUser } from '@/services/api';

const Register = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      toast({
        title: '✅ Usuario registrado',
        description: 'Tu cuenta fue creada exitosamente.',
      });
    } catch (error) {
      toast({
        title: '❌ Error al registrar',
        description: error.message || 'No se pudo registrar el usuario.',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Registrarse - SumaChef</title>
        <meta name="description" content="Crea tu cuenta para comenzar a usar la red social culinaria." />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-900/50 p-4">
        <motion.div 
          className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-center text-white">Crear Cuenta</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-gray-300">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label htmlFor="correo" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
              <input
                type="email"
                name="correo"
                required
                value={form.correo}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300">Contraseña</label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md"
                placeholder="********"
              />
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Registrarse
            </Button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Register;