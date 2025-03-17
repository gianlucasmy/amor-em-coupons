
import React, { useState } from 'react';
import { Coupon as CouponType } from '../utils/couponUtils';
import { Gift, Heart, Check, Share2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

interface CouponProps {
  coupon: CouponType;
  onRedeem: (id: string) => void;
}

const Coupon: React.FC<CouponProps> = ({ coupon, onRedeem }) => {
  const [showRedeemDialog, setShowRedeemDialog] = useState(false);
  const { toast } = useToast();
  
  const handleRedeemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowRedeemDialog(true);
  };

  const confirmRedeem = () => {
    onRedeem(coupon.id);
    setShowRedeemDialog(false);
    toast({
      title: "Cupom resgatado!",
      description: `Você resgatou "${coupon.title}". Aproveite essa experiência especial!`,
      variant: "default",
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5512982537231"; // Seu número no formato internacional
    const message = coupon.whatsappMessage || `Quero resgatar o cupom: ${coupon.title}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <div className={`relative ${coupon.redeemed ? 'opacity-40 grayscale' : ''}`}>
        <div className="rounded-xl overflow-hidden shadow-lg bg-white">
          {/* Imagem do cupom */}
          <div className="relative h-40 overflow-hidden">
            <img 
              src={coupon.image} 
              alt={coupon.title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {coupon.redeemed && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white text-lg font-bold px-3 py-1 bg-black bg-opacity-70 rounded-full">
                  Resgatado
                </span>
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{coupon.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{coupon.description}</p>

            <div className="flex flex-col gap-3 mt-4">
              {/* Botão de Resgate */}
              <button 
                onClick={handleRedeemClick}
                disabled={!coupon.available}
                className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${coupon.available ? 'bg-soft-gold text-white hover:bg-soft-gold/80' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                <Gift className="w-5 h-5 mr-2" />
                <span>{coupon.redeemed ? "Resgatado" : "Resgatar"}</span>
              </button>

              {/* Botão de WhatsApp */}
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white font-medium transition-all duration-300 hover:bg-green-600"
              >
                <Share2 className="w-5 h-5 mr-2" />
                <span>Enviar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog de confirmação de resgate */}
      <AlertDialog open={showRedeemDialog} onOpenChange={setShowRedeemDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar resgate</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja resgatar o cupom <strong>{coupon.title}</strong>? 
              Este cupom só poderá ser usado uma vez.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmRedeem}>
              <Check className="w-4 h-4 mr-2" />
              <span>Confirmar</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Coupon;
