import React from 'react';
import { Helmet } from 'react-helmet';
import PostCard from '@/components/PostCard';

const Feed = () => {
  const posts = [
    { 
      id: 1, 
      user: 'Insumos del Valle Sagrado', 
      avatarText: 'I',
      content: '¡OFERTA DE LA SEMANA! 🥔 Papas nativas orgánicas a un precio increíble. Perfectas para dar un toque gourmet a tus platos. ¡Stock limitado!', 
      likes: 42, 
      comments: 12,
      media: {
        type: 'image',
        source: 'fresh organic potatoes in a basket'
      }
    },
    { 
      id: 2, 
      user: 'Mariscos del Pacífico', 
      avatarText: 'M',
      content: 'Directo del mar a tu cocina. 🐟 Pescado fresco del día, con la calidad que tu restaurante merece. Haz tu pedido ahora.', 
      likes: 58, 
      comments: 19,
      media: {
        type: 'image',
        source: 'fresh fish on ice at a market'
      }
    },
     { 
      id: 3, 
      user: 'Ajíes de la Selva', 
      avatarText: 'A',
      content: '🌶️ ¡Nuevos ajíes exóticos! Dale un picor único a tus creaciones con nuestra nueva cosecha de ají charapita. ¡Pruébalos!', 
      likes: 35, 
      comments: 7,
      media: {
        type: 'image',
        source: 'variety of colorful chili peppers'
      }
    },
  ];

  return (
    <>
      <Helmet>
        <title>Feed de Ofertas - SumaChef</title>
        <meta name="description" content="Descubre las últimas ofertas y productos de tus proveedores." />
      </Helmet>
      <div className="container mx-auto max-w-2xl p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-foreground font-heading">Novedades de Proveedores</h1>
        <div className="space-y-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;