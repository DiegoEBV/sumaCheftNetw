import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Truck, Users } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SumaChef - Conectando la Gastronomía Peruana</title>
        <meta name="description" content="La red social para restaurantes y proveedores en Perú." />
      </Helmet>
      <div className="relative text-foreground overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-background"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-foreground">El Ingrediente Secreto de la</span>
            <span className="block text-primary">Cocina Peruana</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conectamos a los mejores restaurantes con proveedores de insumos de primera calidad. La plataforma para el éxito de tu negocio gastronómico.
          </motion.p>
          <motion.div
            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Button asChild size="lg">
                <Link to="/login">Soy un Restaurante</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                 <Link to="/login">Soy un Proveedor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="relative bg-background/50 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base font-semibold uppercase tracking-wider text-primary font-sans">Todo en un solo lugar</h2>
                <p className="mt-2 text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl font-heading">
                    La Herramienta que tu Negocio Necesita
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="pt-6">
                            <div className="flow-root bg-muted/40 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                                            <UtensilsCrossed className="h-6 w-6 text-primary-foreground" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-foreground tracking-tight">Para Restaurantes</h3>
                                    <p className="mt-5 text-base text-muted-foreground">
                                        Encuentra los mejores insumos, compara precios y conecta directamente con proveedores de confianza.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-muted/40 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                                            <Truck className="h-6 w-6 text-primary-foreground" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-foreground tracking-tight">Para Proveedores</h3>
                                    <p className="mt-5 text-base text-muted-foreground">
                                        Expande tu alcance, publica tus productos y ofertas, y llega a cientos de restaurantes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6">
                            <div className="flow-root bg-muted/40 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                                            <Users className="h-6 w-6 text-primary-foreground" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-foreground tracking-tight">Comunidad</h3>
                                    <p className="mt-5 text-base text-muted-foreground">
                                        Interactúa, comparte conocimientos y mantente al día con las últimas tendencias del sector gastronómico.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;