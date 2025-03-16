import { useEffect, useState } from 'react';

// Define coupon types
export type CouponGroup = "group1" | "group2";

export interface Coupon {
  id: string;
  title: string;
  description: string;
  image: string;
  group: CouponGroup;
  available: boolean;
  redeemed: boolean;
  whatsappMessage: string;
}

// Initial coupons data
const initialCoupons: Coupon[] = [
  {
    id: "coupon1",
    title: "Jantar Romântico",
    description: "Um jantar especial em um restaurante à sua escolha.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop",
    group: "group1",
    available: true,
    redeemed: false,
    whatsappMessage: "Olá amor! Estou resgatando meu cupom de 'Jantar Romântico'. Podemos marcar para este final de semana? 💕"
  },
  {
    id: "coupon2",
    title: "Massagem Relaxante",
    description: "Uma sessão de massagem para relaxar e aliviar o estresse.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000&auto=format&fit=crop",
    group: "group1",
    available: true,
    redeemed: false,
    whatsappMessage: "Oi querido! Quero marcar minha massagem relaxante que acabei de resgatar no app. Quando você pode fazer? 💆‍♀️"
  },
  {
    id: "coupon3",
    title: "Cinema em Casa",
    description: "Uma noite de cinema em casa com filme à sua escolha e petiscos.",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?q=80&w=1000&auto=format&fit=crop",
    group: "group1",
    available: true,
    redeemed: false,
    whatsappMessage: "Vamos ter uma noite de cinema em casa? Acabei de resgatar meu cupom! Quero assistir aquele filme que conversamos. 🎬🍿"
  },
  {
    id: "coupon4",
    title: "Café da Manhã Especial",
    description: "Um café da manhã especial preparado com muito carinho.",
    image: "https://images.unsplash.com/photo-1533920379810-6bedac9e6a09?q=80&w=1000&auto=format&fit=crop",
    group: "group1",
    available: true,
    redeemed: false,
    whatsappMessage: "Bom dia amor! 🌞 Resgatei meu cupom de café da manhã especial. Poderia ser no próximo domingo? ☕🥐"
  },
  {
    id: "coupon5",
    title: "Dia de Spa",
    description: "Um dia inteiro dedicado ao relaxamento e cuidados.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
    group: "group2",
    available: true,
    redeemed: false,
    whatsappMessage: "Oi! Acabei de resgatar meu cupom de Dia de Spa! Podemos organizar isso para o próximo final de semana? 💆‍♀️💅"
  },
  {
    id: "coupon6",
    title: "Passeio Surpresa",
    description: "Um passeio surpresa planejado especialmente para você.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1000&auto=format&fit=crop",
    group: "group2",
    available: true,
    redeemed: false,
    whatsappMessage: "Oi amor! 🚗 Estou resgatando meu cupom de Passeio Surpresa! Quando poderíamos fazer isso? Estou animada! 😊"
  },
  {
    id: "coupon7",
    title: "Noite de Jogos",
    description: "Uma noite divertida com jogos de tabuleiro ou videogames.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1000&auto=format&fit=crop",
    group: "group2",
    available: true,
    redeemed: false,
    whatsappMessage: "Hey! 🎮 Quero resgatar meu cupom de Noite de Jogos! Que tal marcarmos para este final de semana? Vai ser divertido! 🎲"
  },
  {
    id: "coupon8",
    title: "Piquenique no Parque",
    description: "Um piquenique romântico em um parque da cidade.",
    image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?q=80&w=1000&auto=format&fit=crop",
    group: "group2",
    available: true,
    redeemed: false,
    whatsappMessage: "Olá! 🧺 Resgatei meu cupom de Piquenique no Parque! O tempo está ótimo para isso. Quando podemos ir? 🌳"
  }
];

// Create a local storage key for coupons
const STORAGE_KEY = 'love_coupons_data';

export const useCoupons = () => {
  // Initialize state with data from localStorage or use initial data
  const [coupons, setCoupons] = useState<Coupon[]>(() => {
    try {
      // Attempt to load from localStorage
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (savedData) {
        console.log('Loading coupons from localStorage');
        return JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Failed to load coupons from localStorage:', error);
    }
    
    // If localStorage is empty or there was an error, use initial data
    console.log('Using initial coupon data');
    return initialCoupons;
  });

  // Save to localStorage whenever coupons change
  useEffect(() => {
    try {
      console.log('Saving coupons to localStorage:', coupons);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(coupons));
    } catch (error) {
      console.error('Failed to save coupons to localStorage:', error);
    }
  }, [coupons]);

  // Toggle availability based on group
  const toggleCouponGroup = (activeGroup: CouponGroup) => {
    console.log('Toggling coupon group:', activeGroup);
    setCoupons(prevCoupons => {
      return prevCoupons.map(coupon => ({
        ...coupon,
        // Sets the active state based on the group without changing redeemed status
      }));
    });
  };

  // Mark a coupon as redeemed and make others in the same group unavailable
  const redeemCoupon = (couponId: string) => {
    console.log('Redeeming coupon:', couponId);
    setCoupons(prevCoupons => {
      // Find the selected coupon
      const selectedCoupon = prevCoupons.find(c => c.id === couponId);
      if (!selectedCoupon) return prevCoupons;
      
      // Update the coupons array
      return prevCoupons.map(coupon => {
        // If this is the selected coupon, mark it as redeemed
        if (coupon.id === couponId) {
          console.log('Marking coupon as redeemed:', coupon.title);
          return { ...coupon, redeemed: true };
        }
        
        // If this is in the same group as the selected coupon, make it unavailable
        if (coupon.group === selectedCoupon.group && !coupon.redeemed) {
          console.log('Making coupon unavailable:', coupon.title);
          return { ...coupon, available: false };
        }
        
        // Otherwise, return the coupon unchanged
        return coupon;
      });
    });
  };

  // Reset all coupons for a new month
  const resetCouponsForNewMonth = () => {
    console.log('Resetting all coupons for new month');
    setCoupons(initialCoupons);
  };

  return {
    coupons,
    toggleCouponGroup,
    redeemCoupon,
    resetCouponsForNewMonth
  };
};
