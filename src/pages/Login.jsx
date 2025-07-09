
import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const Login = () => {
    const { toast } = useToast();

    const handleLogin = (e) => {
        e.preventDefault();
        toast({
            title: "🚧 Función en desarrollo",
            description: "El inicio de sesión aún no está implementado. ¡Vuelve pronto!",
        });
    };

    return (
        <>
            <Helmet>
                <title>Iniciar Sesión - Red Social Culinaria</title>
                <meta name="description" content="Accede a tu cuenta o regístrate." />
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-900/50 p-4">
                <motion.div 
                    className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-center text-white">Bienvenido de Nuevo</h1>
                    <p className="text-center text-gray-400">Inicia sesión para continuar</p>
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Correo Electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="tu@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-300">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full px-3 py-2 mt-1 text-white bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="********"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                            Iniciar Sesión
                        </Button>
                    </form>
                    <p className="text-sm text-center text-gray-400">
                        ¿No tienes una cuenta?{' '}
                        <button onClick={handleLogin} className="font-medium text-purple-400 hover:underline">
                            Regístrate
                        </button>
                    </p>
                </motion.div>
            </div>
        </>
    );
};

export default Login;
