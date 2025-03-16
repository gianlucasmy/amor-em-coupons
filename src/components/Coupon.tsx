
import React, { useState } from 'react';
import { Coupon as CouponType } from '../utils/couponData';
import { Gift, Heart } from 'lucide-react';

interface CouponProps {
  coupon: CouponType;
}

const Coupon: React.FC<CouponProps> = ({ coupon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleRedeemClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Open WhatsApp with pre-formatted message
    const encodedMessage = encodeURIComponent(coupon.whatsappMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
  };

  // Flip the card when clicked
  const handleCouponClick = () => {
    if (coupon.available) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`relative perspective ${!coupon.available ? 'opacity-40' : ''}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`w-full h-full transition-all duration-500 transform-gpu preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleCouponClick}
      >
        {/* Front of card */}
        <div className={`rounded-xl overflow-hidden shadow-coupon h-full backface-hidden ${isFlipped ? 'invisible' : 'visible'}`}>
          <div className="relative h-44 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img 
              src={coupon.image} 
              alt={coupon.title} 
              className="w-full h-full object-cover transform-gpu transition-transform duration-700 ease-in-out hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="font-serif text-white text-xl font-bold">{coupon.title}</h3>
            </div>
            {/* Badge for group */}
            <div className="absolute top-3 right-3 z-20">
              <span className={`text-xs px-2 py-1 rounded-full ${coupon.group === "group1" ? "bg-soft-pink text-accent/80" : "bg-muted-gold text-accent/80"} font-semibold`}>
                {coupon.group === "group1" ? "Grupo 1" : "Grupo 2"}
              </span>
            </div>
          </div>
          
          <div className="glass p-4">
            <p className="text-accent/70 text-sm mb-4">{coupon.description}</p>
            
            <div className="mt-2 flex justify-center">
              <button 
                disabled={!coupon.available} 
                className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${!coupon.available ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-soft-pink text-accent hover:bg-soft-pink/80'}`}
              >
                {coupon.available ? (
                  <>
                    <span className="mr-1">Clique para mais detalhes</span>
                    <Heart className="w-4 h-4" />
                  </>
                ) : 'Indisponível'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className={`absolute inset-0 rounded-xl rotate-y-180 backface-hidden glass-dark p-6 flex flex-col justify-between shadow-coupon ${isFlipped ? 'visible' : 'invisible'}`}>
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold mb-2 text-gradient">{coupon.title}</h3>
            <div className="w-12 h-1 bg-soft-gold rounded-full my-3 mx-auto opacity-50"></div>
            <p className="text-accent/70 mb-4">{coupon.description}</p>
          </div>
          
          <div className="flex justify-center items-center mt-4">
            <button 
              onClick={handleRedeemClick}
              className="flex items-center justify-center px-6 py-3 rounded-lg bg-soft-gold/80 text-white font-medium transition-all duration-300 hover:bg-soft-gold"
            >
              <Gift className="w-5 h-5 mr-2" />
              <span>Resgatar</span>
            </button>
          </div>
          
          <div className="absolute top-2 right-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }} 
              className="text-accent/60 hover:text-accent/80"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
