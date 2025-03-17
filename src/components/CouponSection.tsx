
import React, { useState } from 'react';
import Coupon from './Coupon';
import { useCoupons, CouponGroup, getCurrentMonthName } from '../utils/couponUtils';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, RefreshCw } from 'lucide-react';

const CouponSection: React.FC = () => {
  const { 
    coupons, 
    toggleCouponGroup, 
    redeemCoupon, 
    resetCouponsForNewMonth,
    getCouponsByGroup 
  } = useCoupons();
  
  const [activeGroup, setActiveGroup] = useState<CouponGroup>("group1");
  const [showResetDialog, setShowResetDialog] = useState(false);

  const handleGroupToggle = (group: CouponGroup) => {
    setActiveGroup(group);
    toggleCouponGroup(group);
  };
  
  const handleResetCoupons = () => {
    resetCouponsForNewMonth();
    setShowResetDialog(false);
  };
  
  // Get coupons for the active group
  const activeCoupons = getCouponsByGroup(activeGroup);
  
  // Count available and redeemed coupons per group
  const getCouponStats = (group: CouponGroup) => {
    const groupCoupons = coupons.filter(c => c.group === group);
    const available = groupCoupons.filter(c => c.available).length;
    const redeemed = groupCoupons.filter(c => c.redeemed).length;
    return { available, redeemed, total: groupCoupons.length };
  };
  
  const group1Stats = getCouponStats("group1");
  const group2Stats = getCouponStats("group2");

  // Get current month name
  const getCurrentMonthName = () => {
    const months = [
      "Janeiro", "Fevereiro", "Março", "Abril", 
      "Maio", "Junho", "Julho", "Agosto", 
      "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[new Date().getMonth()];
  };

  return (
    <section className="py-8 mb-12">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-6 sm:p-8 shadow-soft animate-fade-in delay-200">
          {/* Month indicator */}
          <div className="text-center mb-6">
            <span className="inline-block bg-soft-pink/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
              {getCurrentMonthName()}
            </span>
          </div>
          
          {/* Group selector */}
          <div className="flex justify-center mb-8">
            <div className="flex p-1 rounded-xl bg-soft-cream">
              <button
                className={`relative py-2 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${activeGroup === "group1" ? "bg-soft-pink text-accent" : "hover:bg-soft-pink/10"}`}
                onClick={() => handleGroupToggle("group1")}
              >
                Restaurantes
                {group1Stats.available > 0 && (
                  <span className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-pink opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-soft-pink"></span>
                    </span>
                  </span>
                )}
                <span className="ml-2 text-xs opacity-75">
                  {group1Stats.redeemed}/{group1Stats.total}
                </span>
              </button>
              <button
                className={`relative py-2 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${activeGroup === "group2" ? "bg-muted-gold/60 text-accent" : "hover:bg-muted-gold/10"}`}
                onClick={() => handleGroupToggle("group2")}
              >
                Lazer
                {group2Stats.available > 0 && (
                  <span className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-gold opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-muted-gold/60"></span>
                    </span>
                  </span>
                )}
                <span className="ml-2 text-xs opacity-75">
                  {group2Stats.redeemed}/{group2Stats.total}
                </span>
              </button>
            </div>
          </div>
          
          {/* Admin reset button (only visible to the creator) */}
          <div className="absolute top-4 right-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="opacity-40 hover:opacity-100 transition-opacity"
                >
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  Admin
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-60 p-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Administração</h4>
                  <p className="text-xs text-muted-foreground">
                    Resetar todos os cupons para começar novamente
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full" 
                    onClick={() => setShowResetDialog(true)}
                  >
                    <RefreshCw className="h-3 w-3 mr-2" />
                    Resetar Tudo
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
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
            <p className="text-accent/60 text-sm mt-2">
              Escolha um cupom para resgatar
            </p>
          </div>
          
          {/* Coupons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeCoupons.map((coupon, index) => (
              <div key={coupon.id} className={`animate-fade-in delay-${(index + 1) * 100}`}>
                <Coupon coupon={coupon} onRedeem={redeemCoupon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Reset confirmation dialog */}
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent className="glass-dialog">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-accent">Resetar todos os cupons?</AlertDialogTitle>
            <AlertDialogDescription>
              Isso vai liberar todos os cupons novamente. 
              Todos os registros de resgates anteriores serão perdidos.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleResetCoupons} className="bg-soft-gold text-white hover:bg-soft-gold/80">
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default CouponSection;
