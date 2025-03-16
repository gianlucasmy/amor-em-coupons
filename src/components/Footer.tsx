
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 shadow-soft">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-soft-pink mr-2" fill="#FFDEE2" />
              <p className="font-serif text-lg text-accent/80">
                Feito com amor para você
              </p>
              <Heart className="w-5 h-5 text-soft-pink ml-2" fill="#FFDEE2" />
            </div>
            
            <p className="text-accent/70 text-sm max-w-md">
              Cada um desses cupons representa um momento especial que quero compartilhar com você. 
              Nossa história é feita de pequenos momentos que se tornam grandes memórias.
            </p>
            
            <div className="mt-4 text-accent/50 text-xs">
              © {new Date().getFullYear()} · Todos os direitos reservados ao meu coração
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
