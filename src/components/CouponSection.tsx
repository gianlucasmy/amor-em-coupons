
import React, { useState } from 'react';
import Coupon from './Coupon';
import { coupons, toggleCouponAvailability, CouponGroup } from '../utils/couponData';

const CouponSection: React.FC = () => {
  const [activeCoupons, setActiveCoupons] = useState(coupons);
  const [activeGroup, setActiveGroup] = useState<CouponGroup>("group1");

  const handleGroupToggle = (group: CouponGroup) => {
    setActiveGroup(group);
    setActiveCoupons(toggleCouponAvailability(group));
  };

  return (
    <section className="py-8 mb-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 sm:p-8 shadow-soft animate-fade-in delay-200">
          {/* Group selector */}
          <div className="flex justify-center mb-8">
            <div className="flex p-1 rounded-xl bg-soft-cream">
              <button
                className={`relative py-2 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${activeGroup === "group1" ? "bg-soft-pink text-accent" : "hover:bg-soft-pink/10"}`}
                onClick={() => handleGroupToggle("group1")}
              >
                Grupo 1
                {activeGroup === "group1" && (
                  <span className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-pink opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-soft-pink"></span>
                    </span>
                  </span>
                )}
              </button>
              <button
                className={`relative py-2 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${activeGroup === "group2" ? "bg-muted-gold/60 text-accent" : "hover:bg-muted-gold/10"}`}
                onClick={() => handleGroupToggle("group2")}
              >
                Grupo 2
                {activeGroup === "group2" && (
                  <span className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-gold opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-muted-gold/60"></span>
                    </span>
                  </span>
                )}
              </button>
            </div>
          </div>
          
          {/* Group description */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-accent mb-2">
              {activeGroup === "group1" ? "Experiências Gastronômicas" : "Momentos Especiais"}
            </h2>
            <p className="text-accent/70 max-w-2xl mx-auto">
              {activeGroup === "group1" 
                ? "Aproveite essas experiências deliciosas em locais especiais." 
                : "Desfrute desses momentos únicos para criar memórias inesquecíveis."}
            </p>
          </div>
          
          {/* Coupons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCoupons.map((coupon, index) => (
              <div key={coupon.id} className={`animate-fade-in delay-${(index + 1) * 100}`}>
                <Coupon coupon={coupon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
