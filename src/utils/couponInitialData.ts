
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
    image: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
    whatsappMessage: "Amor, quero resgatar meu cupom 'Pizza Creck'! 🍫🍓 Que tal pedir uma hoje?",
    redeemed: false,
    month: 4
  }
];
