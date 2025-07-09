import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { BellRing } from "lucide-react";

const NotificacionItem = ({ notificacion }) => {
  const { toast } = useToast();

  const handleVerDetalles = () => {
    toast({
      title: "Detalles de la Notificación",
      description: "Aquí se mostrarían los detalles completos de la notificación.",
    });
  };

  return (
    <div className="flex items-center p-4 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 mb-4">
      <div className="mr-4 text-purple-400">
        <BellRing className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-white">Nueva oferta de proveedor</p>
        <p className="text-sm text-white/70">¡Tomates frescos con 20% de descuento!</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="ml-4 border-white/30 text-white hover:bg-white/10"
        onClick={handleVerDetalles}
      >
        Ver
      </Button>
    </div>
  );
};

export default NotificacionItem;