
import { Coupon } from './couponTypes';

// Initial coupon data with real images
export const initialCoupons: Coupon[] = [
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: true,
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
    available: true,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍕 Que tal uma pizza hoje?",
    redeemed: false,
    month: 4
  }
];
