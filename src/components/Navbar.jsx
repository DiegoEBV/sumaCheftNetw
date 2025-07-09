import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from './ui/use-toast';
import { ChefHat, LogOut, UserCircle, UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente.",
    });
  };

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Función en desarrollo",
      description: "Esta característica aún no está implementada.",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <UtensilsCrossed className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold font-heading text-foreground">SumaChef</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/feed" className={({isActive}) => `text-lg ${isActive ? 'text-primary' : 'text-muted-foreground'} hover:text-primary transition-colors`}>Feed</NavLink>
            <button onClick={handleFeatureClick} className="text-lg text-muted-foreground hover:text-primary transition-colors">Proveedores</button>
            <button onClick={handleFeatureClick} className="text-lg text-muted-foreground hover:text-primary transition-colors">Ofertas</button>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/perfil">
                  <UserCircle className="w-8 h-8 text-muted-foreground hover:text-primary" />
                </Link>
                <Button onClick={handleLogout} variant="ghost" size="icon">
                  <LogOut className="w-6 h-6 text-muted-foreground hover:text-primary" />
                </Button>
              </>
            ) : (
              <Button asChild>
                <Link to="/login">Iniciar Sesión</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;