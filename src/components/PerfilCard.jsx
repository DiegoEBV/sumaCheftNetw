
import React from 'react';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Edit } from 'lucide-react';

const PerfilCard = () => {
  const { toast } = useToast();
  
  const handleEdit = () => {
    toast({
      title: "🚧 No implementado",
      description: "La edición del perfil estará disponible pronto.",
    });
  };

  return (
    <motion.div 
        className="max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <img  className="w-full h-48 object-cover" alt="Banner de perfil de un restaurante" src="https://images.unsplash.com/photo-1681279369361-a18fa64d4149" />
        <div className="absolute top-4 right-4">
            <Button onClick={handleEdit} size="icon" className="bg-black/50 hover:bg-black/75">
                <Edit className="w-5 h-5 text-white" />
            </Button>
        </div>
        <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 rounded-full border-4 border-gray-800 overflow-hidden">
                <img  className="w-full h-full object-cover" alt="Logo del restaurante" src="https://images.unsplash.com/photo-1685474944551-052c92d38f43" />
            </div>
        </div>
      </div>

      <div className="pt-20 px-8 pb-8">
        <h1 className="text-3xl font-bold text-white">Restaurante "El Buen Sabor"</h1>
        <p className="text-md text-purple-400">@elbuensabor</p>
        <p className="mt-4 text-gray-300">
          Especialistas en cocina mediterránea con un toque moderno. Comprometidos con la calidad y los ingredientes frescos de proveedores locales.
        </p>
        
        <div className="mt-6 flex justify-around text-center">
            <div>
                <p className="text-2xl font-bold text-white">128</p>
                <p className="text-sm text-gray-400">Conexiones</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-white">56</p>
                <p className="text-sm text-gray-400">Publicaciones</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-white">4.8/5</p>
                <p className="text-sm text-gray-400">Calificación</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerfilCard;
