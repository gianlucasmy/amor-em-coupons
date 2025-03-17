
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
  month?: number; // Month when this coupon is available (1-12)
}

// Initial coupon data with real images
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
    redeemed: false,
    month: 1
  },
  {
    id: "digao",
    title: "Comer no Digão",
    description: "Um jantar casual em um restaurante aconchegante.",
    group: "group1",
    available: false,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Comer no Digão'! 🍽️ Quando podemos ir?",
    redeemed: false,
    month: 2
  },
  {
    id: "cabana",
    title: "Almoçar no Cabana",
    description: "Um almoço especial em um ambiente descontraído.",
    group: "group1",
    available: false,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Almoçar no Cabana'! 🍴 Que tal irmos neste final de semana?",
    redeemed: false,
    month: 3
  },
  {
    id: "perdita",
    title: "Café na Perdita",
    description: "Um café da manhã ou lanche da tarde em um ambiente acolhedor.",
    group: "group1",
    available: false,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Café na Perdita'! ☕ Vamos?",
    redeemed: false,
    month: 4
  },
  
  // Group 2
  {
    id: "b-and-b",
    title: "Copinho no B&B",
    description: "Uma experiência de drinks ou degustação em um bar charmoso.",
    group: "group2",
    available: true,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Copinho no B&B'! 🥂 Vamos dar uma passada lá?",
    redeemed: false,
    month: 1
  },
  {
    id: "pao-de-queijo",
    title: "Torta na Pão de Queijo",
    description: "Uma sobremesa ou lanche surpreendente em um local icônico.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Torta na Pão de Queijo'! 🧀🍰 Estou com vontade!",
    redeemed: false,
    month: 2
  },
  {
    id: "gelateria",
    title: "La Gelateria",
    description: "Uma visita à sorveteria para saborear gelatos deliciosos.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'La Gelateria'! 🍦 Vamos tomar um gelato?",
    redeemed: false,
    month: 3
  },
  {
    id: "pizza-creck",
    title: "Pizza Creck",
    description: "Uma noite de pizza e descontração.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍕 Que tal uma pizza hoje?",
    redeemed: false,
    month: 4
  }
];

// Get the current month (1-12)
const getCurrentMonth = () => {
  return new Date().getMonth() + 1; // JavaScript months are 0-indexed
};

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
    const loadedCoupons = loadCoupons();
    
    // Update availability based on the current month
    const currentMonth = getCurrentMonth();
    console.log('Current month:', currentMonth);
    
    const updatedCoupons = loadedCoupons.map(coupon => {
      // Check if any coupon in this group has been redeemed in the current month
      const hasRedeemedCouponInGroup = loadedCoupons.some(c => 
        c.group === coupon.group && 
        c.redeemed && 
        c.redeemedAt && 
        new Date(c.redeemedAt).getMonth() + 1 === currentMonth
      );

      // For each group, make available:
      // 1. The earliest unredeemed coupon for the current month if none redeemed yet
      // 2. Or nothing if a coupon from this group has been redeemed this month
      let shouldBeAvailable = false;
      
      if (!coupon.redeemed && !hasRedeemedCouponInGroup) {
        // Find the earliest unredeemed coupon in this group
        const earliestUnredeemed = loadedCoupons
          .filter(c => c.group === coupon.group && !c.redeemed)
          .sort((a, b) => (a.month || 999) - (b.month || 999))[0];
        
        // Make it available if this is that coupon
        shouldBeAvailable = coupon.id === earliestUnredeemed?.id;
      }
      
      return {
        ...coupon,
        available: shouldBeAvailable
      };
    });
    
    setCoupons(updatedCoupons);
    console.log('Updated coupons:', updatedCoupons);
  }, []);
  
  // Save to localStorage whenever coupons change
  useEffect(() => {
    saveCoupons(coupons);
  }, [coupons]);
  
  // Toggle between group 1 and group 2
  const toggleCouponGroup = (group: CouponGroup) => {
    // This method now only affects the UI display, not the actual availability
    setCoupons(prev => [...prev]); // Just trigger a re-render
  };
  
  // Mark a coupon as redeemed
  const redeemCoupon = (couponId: string) => {
    setCoupons(currentCoupons => {
      const couponToRedeem = currentCoupons.find(c => c.id === couponId);
      if (!couponToRedeem) return currentCoupons;
      
      const currentMonth = getCurrentMonth();
      
      // Update the coupon being redeemed
      const updatedCoupons = currentCoupons.map(coupon => {
        if (coupon.id === couponId) {
          return {
            ...coupon,
            redeemed: true,
            redeemedAt: new Date(),
            available: false
          };
        }
        
        // Lock all remaining coupons in the same group until next month
        if (coupon.group === couponToRedeem.group && !coupon.redeemed) {
          return {
            ...coupon,
            available: false
          };
        }
        
        return coupon;
      });
      
      return updatedCoupons;
    });
  };
  
  // Reset all coupons (admin function)
  const resetCouponsForNewMonth = () => {
    setCoupons(initialCoupons.map(coupon => ({
      ...coupon,
      redeemed: false,
      available: coupon.month === 1 // Only first month coupons start as available
    })));
  };
  
  // Get coupons for a specific group
  const getCouponsByGroup = (group: CouponGroup) => {
    return coupons.filter(coupon => coupon.group === group);
  };
  
  // Get all available coupons
  const getAvailableCoupons = () => {
    return coupons.filter(coupon => coupon.available);
  };
  
  // Get all redeemed coupons
  const getRedeemedCoupons = () => {
    return coupons.filter(coupon => coupon.redeemed);
  };
  
  return {
    coupons,
    redeemCoupon,
    toggleCouponGroup,
    resetCouponsForNewMonth,
    getAvailableCoupons,
    getRedeemedCoupons,
    getCouponsByGroup
  };
};
