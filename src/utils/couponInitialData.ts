
import { Coupon } from './couponTypes';

// Initial coupon data with real images
export const initialCoupons: Coupon[] = [
  // Group 1
  {
    id: "cinema-bk",
    title: "Cinema com Burger King 🎬🍔",
    description: "Uma sessão de cinema comendo um delicioso lanche do Burger King, como a gente adora fazer!",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1610421320972-d1b8truef8d?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Cinema com Burger King'! 🎬🍔 Quando podemos marcar?",
    redeemed: false,
    month: 1
  },
  {
    id: "digao",
    title: "Comer no Digão 🥟🍻",
    description: "Nosso lugar favorito para comer torresmos recheados, pastéis, bolinhos e outras delícias de boteco, acompanhados de uma boa cerveja.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1543992321-6b93c8f97de0?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Comer no Digão'! 🥟🍻 Quando podemos ir?",
    redeemed: false,
    month: 2
  },
  {
    id: "cabana",
    title: "Almoçar no Cabana 🍛🍖",
    description: "Um almoço especial no Cabana, com filé mignon suíno, arroz, feijão, fritas, farofa e vinagrete, perfeito para um domingo gostoso.",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1588685562825-8b92c9a228c6?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Almoçar no Cabana'! 🍛🍖 Que tal irmos neste final de semana?",
    redeemed: false,
    month: 3
  },
  {
    id: "perdita",
    title: "Café na Perdita ☕🐶",
    description: "Nosso café da manhã perfeito, em um lugar pet-friendly onde podemos levar nosso cachorro e ele também pode aproveitar!",
    group: "group1",
    available: true,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Café na Perdita'! ☕🐶 Vamos?",
    redeemed: false,
    month: 4
  },
  
  // Group 2
  {
    id: "b-and-b",
    title: "Copinho no B&B 🍸🎶",
    description: "Uma noite descontraída na adega B&B, tomando nossos drinks favoritos em um ambiente animado.",
    group: "group2",
    available: true,
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Copinho no B&B'! 🍸🎶 Vamos dar uma passada lá?",
    redeemed: false,
    month: 1
  },
  {
    id: "pao-de-queijo",
    title: "Torta na Pão de Queijo 🥧☕",
    description: "Uma visita à nossa padaria favorita para comer a deliciosa torta de calafrango, perfeita para qualquer momento do dia.",
    group: "group2",
    available: true,
    image: "https://images.unsplash.com/photo-1577303388949-701bfcd75fdb?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Torta na Pão de Queijo'! 🥧☕ Estou com vontade!",
    redeemed: false,
    month: 2
  },
  {
    id: "gelateria",
    title: "La Gelateria 🍦",
    description: "Uma experiência doce na nossa sorveteria favorita, escolhendo sabores incríveis.",
    group: "group2",
    available: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'La Gelateria'! 🍦 Vamos tomar um gelato?",
    redeemed: false,
    month: 3
  },
  {
    id: "pizza-creck",
    title: "Pizza Creck 🍫🍓",
    description: "Nosso delivery favorito de pizzas enroladas, com a irresistível combinação de chocolate e morango.",
    group: "group2",
    available: true,
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍫🍓 Que tal pedir uma hoje?",
    redeemed: false,
    month: 4
  }
];
