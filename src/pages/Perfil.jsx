
import React from 'react';
import { Helmet } from 'react-helmet';
import PerfilCard from '@/components/PerfilCard';

const Perfil = () => {
    return (
        <>
            <Helmet>
                <title>Mi Perfil - Red Social Culinaria</title>
                <meta name="description" content="Gestiona tu perfil y tu información." />
            </Helmet>
            <div className="container mx-auto p-4">
               <PerfilCard />
            </div>
        </>
    );
};

export default Perfil;
