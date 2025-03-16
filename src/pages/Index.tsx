
import React, { useEffect } from 'react';
import Header from '../components/Header';
import CouponSection from '../components/CouponSection';
import Footer from '../components/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Cupons de Amor";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add a subtle entrance animation to the body
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.transition = "opacity 800ms ease-in-out";
      document.body.style.opacity = "1";
    }, 100);
    
    return () => {
      document.body.style.transition = "";
      document.body.style.opacity = "";
    };
  }, []);

  return (
    <div className="min-h-screen">
      <BackgroundAnimation />
      
      <div className="py-8 sm:py-12">
        <Header />
        <CouponSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
