import React from 'react';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Share2, Tag } from 'lucide-react';

const PostCard = ({ post }) => {
  const { toast } = useToast();

  const handleInteraction = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "Pronto podrás interactuar con las publicaciones.",
    });
  };

const userInitial = post.usuario?.charAt(0)?.toUpperCase() || 'U';
const userName = post.usuario || 'Usuario Anónimo';
  const fecha = new Date(post.fecha).toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <motion.div 
      className="bg-muted/40 rounded-lg shadow-lg overflow-hidden border border-border"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-5">
        {/* Header con avatar y nombre */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-xl text-primary-foreground">
            {userInitial}
          </div>
          <div className="ml-4">
            <p className="font-bold text-lg text-foreground">{userName}</p>
            <p className="text-sm text-muted-foreground">{fecha}</p>
          </div>
        </div>

        {/* Contenido de la publicación */}
        <p className="text-foreground/90 mb-4">{post.contenido}</p>

        {/* Imagen si existe */}
        {post.imagen_url && (
          <div className="rounded-lg overflow-hidden mb-4 border border-border">
            <img
              alt="Imagen del post"
              className="w-full h-auto object-cover max-h-[500px]"
              src={post.imagen_url}
            />
          </div>
        )}

        {/* Etiquetas */}
        {Array.isArray(post.etiquetas) && post.etiquetas.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.etiquetas.map((tag, index) => (
              <span key={index} className="bg-secondary text-secondary-foreground text-sm px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer con acciones */}
      <div className="border-t border-border px-5 py-3 flex justify-between items-center">
        <div className="flex space-x-6 text-muted-foreground">
          <button onClick={handleInteraction} className="flex items-center space-x-2 hover:text-primary transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span className="font-medium">0</span>
          </button>
          <button onClick={handleInteraction} className="flex items-center space-x-2 hover:text-primary transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">0</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={handleInteraction} variant="secondary" size="sm">
            <Tag className="w-4 h-4 mr-2" />
            {post.tipo === 'oferta' ? 'Ver Oferta' : 'Ver Recomendación'}
          </Button>
          <button onClick={handleInteraction} className="text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;