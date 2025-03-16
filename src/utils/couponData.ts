
import { useState, useEffect } from 'react';

export type CouponGroup = "group1" | "group2";

export interface Coupon {
  id: string;
  title: string;
  description: string;
  group: CouponGroup;
  available: boolean;
  image: string;
  whatsappMessage: string;
  redeemed: boolean;
  redeemedAt?: Date;
}

// Initial coupon data
const initialCoupons: Coupon[] = [
  // Group 1
  {
    id: "cinema-bk",
    title: "Cinema com BK",
    description: "Uma sessão de cinema caseiro com pipoca e nossos filmes favoritos.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Cinema com BK'! 🎬🍿 Quando podemos marcar?",
    redeemed: false
  },
  {
    id: "digao",
    title: "Comer no Digão",
    description: "Um jantar casual em um restaurante aconchegante.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Comer no Digão'! 🍽️ Quando podemos ir?",
    redeemed: false
  },
  {
    id: "cabana",
    title: "Almoçar no Cabana",
    description: "Um almoço especial em um ambiente descontraído.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Almoçar no Cabana'! 🍴 Que tal irmos neste final de semana?",
    redeemed: false
  },
  {
    id: "perdita",
    title: "Café na Perdita",
    description: "Um café da manhã ou lanche da tarde em um ambiente acolhedor.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Café na Perdita'! ☕ Vamos?",
    redeemed: false
  },
  
  // Group 2
  {
    id: "b-and-b",
    title: "Copinho no B&B",
    description: "Uma experiência de drinks ou degustação em um bar charmoso.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Copinho no B&B'! 🥂 Vamos dar uma passada lá?",
    redeemed: false
  },
  {
    id: "pao-de-queijo",
    title: "Torta na Pão de Queijo",
    description: "Uma sobremesa ou lanche surpreendente em um local icônico.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Torta na Pão de Queijo'! 🧀🍰 Estou com vontade!",
    redeemed: false
  },
  {
    id: "gelateria",
    title: "La Gelateria",
    description: "Uma visita à sorveteria para saborear gelatos deliciosos.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'La Gelateria'! 🍦 Vamos tomar um gelato?",
    redeemed: false
  },
  {
    id: "pizza-creck",
    title: "Pizza Creck",
    description: "Uma noite de pizza e descontração.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍕 Que tal uma pizza hoje?",
    redeemed: false
  }
];

// Load coupons from local storage or use initial data
const loadCoupons = (): Coupon[] => {
  const storedCoupons = localStorage.getItem('coupons');
  if (storedCoupons) {
    try {
      return JSON.parse(storedCoupons);
    } catch (e) {
      console.error('Error parsing stored coupons', e);
      return initialCoupons;
    }
  }
  return initialCoupons;
};

// Save coupons to local storage
const saveCoupons = (coupons: Coupon[]) => {
  localStorage.setItem('coupons', JSON.stringify(coupons));
};

// Get current coupons from memory or storage
export const useCoupons = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  
  // Load coupons from localStorage on first render
  useEffect(() => {
    setCoupons(loadCoupons());
  }, []);
  
  // Save to localStorage whenever coupons change
  useEffect(() => {
    saveCoupons(coupons);
  }, [coupons]);
  
  // Toggle between group 1 and group 2
  const toggleCouponGroup = (group: CouponGroup) => {
    setCoupons(currentCoupons => {
      return currentCoupons.map(coupon => ({
        ...coupon,
        available: coupon.group === group && !coupon.redeemed
      }));
    });
  };
  
  // Mark a coupon as redeemed and lock other coupons in the same group
  const redeemCoupon = (couponId: string) => {
    setCoupons(currentCoupons => {
      const couponToRedeem = currentCoupons.find(c => c.id === couponId);
      if (!couponToRedeem) return currentCoupons;
      
      const redeemedGroup = couponToRedeem.group;
      
      return currentCoupons.map(coupon => {
        if (coupon.id === couponId) {
          return {
            ...coupon,
            redeemed: true,
            redeemedAt: new Date(),
            available: false
          };
        } else if (coupon.group === redeemedGroup) {
          // Lock other coupons in the same group
          return {
            ...coupon,
            available: false
          };
        }
        return coupon;
      });
    });
  };
  
  // Reset coupons for a new month
  const resetCouponsForNewMonth = () => {
    setCoupons(initialCoupons);
  };
  
  // Get all available coupons
  const getAvailableCoupons = () => {
    return coupons.filter(coupon => coupon.available);
  };
  
  // Get all redeemed coupons
  const getRedeemedCoupons = () => {
    return coupons.filter(coupon => coupon.redeemed);
  };
  
  // Get all unavailable coupons
  const getUnavailableCoupons = () => {
    return coupons.filter(coupon => !coupon.available);
  };
  
  return {
    coupons,
    redeemCoupon,
    toggleCouponGroup,
    resetCouponsForNewMonth,
    getAvailableCoupons,
    getRedeemedCoupons,
    getUnavailableCoupons
  };
};
