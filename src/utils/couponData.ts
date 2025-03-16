
export type CouponGroup = "group1" | "group2";

export interface Coupon {
  id: string;
  title: string;
  description: string;
  group: CouponGroup;
  available: boolean;
  image: string;
  whatsappMessage: string;
}

export const coupons: Coupon[] = [
  // Group 1
  {
    id: "cinema-bk",
    title: "Cinema com BK",
    description: "Uma sessão de cinema caseiro com pipoca e nossos filmes favoritos.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Cinema com BK'! 🎬🍿 Quando podemos marcar?"
  },
  {
    id: "digao",
    title: "Comer no Digão",
    description: "Um jantar casual em um restaurante aconchegante.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Comer no Digão'! 🍽️ Quando podemos ir?"
  },
  {
    id: "cabana",
    title: "Almoçar no Cabana",
    description: "Um almoço especial em um ambiente descontraído.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Almoçar no Cabana'! 🍴 Que tal irmos neste final de semana?"
  },
  {
    id: "perdita",
    title: "Café na Perdita",
    description: "Um café da manhã ou lanche da tarde em um ambiente acolhedor.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Café na Perdita'! ☕ Vamos?"
  },
  
  // Group 2
  {
    id: "b-and-b",
    title: "Copinho no B&B",
    description: "Uma experiência de drinks ou degustação em um bar charmoso.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Copinho no B&B'! 🥂 Vamos dar uma passada lá?"
  },
  {
    id: "pao-de-queijo",
    title: "Torta na Pão de Queijo",
    description: "Uma sobremesa ou lanche surpreendente em um local icônico.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Torta na Pão de Queijo'! 🧀🍰 Estou com vontade!"
  },
  {
    id: "gelateria",
    title: "La Gelateria",
    description: "Uma visita à sorveteria para saborear gelatos deliciosos.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'La Gelateria'! 🍦 Vamos tomar um gelato?"
  },
  {
    id: "pizza-creck",
    title: "Pizza Creck",
    description: "Uma noite de pizza e descontração.",
    group: "group2",
    available: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍕 Que tal uma pizza hoje?"
  }
];

export const toggleCouponAvailability = (group: CouponGroup) => {
  // Toggle the availability of coupons based on the selected group
  return coupons.map(coupon => ({
    ...coupon,
    available: coupon.group === group
  }));
};

export const getAvailableCoupons = () => {
  return coupons.filter(coupon => coupon.available);
};

export const getUnavailableCoupons = () => {
  return coupons.filter(coupon => !coupon.available);
};
