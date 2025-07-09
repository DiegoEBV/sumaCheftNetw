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
        <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-xl text-primary-foreground">
                {post.avatarText}
            </div>
          <div className="ml-4">
            <p className="font-bold text-lg text-foreground">{post.user}</p>
            <p className="text-sm text-muted-foreground">Hace 2 horas</p>
          </div>
        </div>
        <p className="text-foreground/90 mb-4">{post.content}</p>
        
        {post.media && post.media.type === 'image' && (
          <div className="rounded-lg overflow-hidden mb-4 border border-border">
            <img  alt="Producto promocionado" className="w-full h-auto object-cover max-h-[500px]" src="https://images.unsplash.com/photo-1633524418558-3ea46b913fc3" />
          </div>
        )}
      </div>
      <div className="border-t border-border px-5 py-3 flex justify-between items-center">
        <div className="flex space-x-6 text-muted-foreground">
            <button onClick={handleInteraction} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <ThumbsUp className="w-5 h-5" />
                <span className="font-medium">{post.likes}</span>
            </button>
            <button onClick={handleInteraction} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="font-medium">{post.comments}</span>
            </button>
        </div>
        <div className="flex items-center gap-4">
            <Button onClick={handleInteraction} variant="secondary" size="sm">
                <Tag className="w-4 h-4 mr-2" />
                Ver Oferta
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