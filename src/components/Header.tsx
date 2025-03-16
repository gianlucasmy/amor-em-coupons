
import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full py-6 mb-8">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 shadow-soft animate-fade-in">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-2">
              <Heart className="w-6 h-6 text-soft-pink mr-2" fill="#FFDEE2" />
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
                Cupons de Amor
              </h1>
              <Heart className="w-6 h-6 text-soft-pink ml-2" fill="#FFDEE2" />
            </div>
            
            <div className="w-24 h-1 bg-soft-gold rounded-full my-4 opacity-50"></div>
            
            <div className="max-w-3xl mx-auto">
              <p className="font-serif text-lg md:text-xl text-accent/80 leading-relaxed animate-fade-in delay-100">
                Querida, preparei uma série de surpresas para os próximos meses para celebrar nosso amor com experiências únicas. 
                Cada mês, você poderá resgatar 2 cupons especiais, divididos em dois grupos, que preparamos com muito carinho para você. 
                Clique no cupom do mês e descubra uma experiência inesquecível!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
