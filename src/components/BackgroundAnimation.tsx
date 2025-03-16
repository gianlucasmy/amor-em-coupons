
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-soft-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
      <div className="absolute top-0 -right-20 w-80 h-80 bg-soft-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft animation-delay-2000"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 bg-muted-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft animation-delay-4000"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-muted-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft animation-delay-5000"></div>
    </div>
  );
};

export default BackgroundAnimation;
