
import { useState, useEffect } from 'react';
import { Coupon, CouponGroup } from './couponTypes';
import { initialCoupons } from './couponInitialData';
import { loadCoupons, saveCoupons } from './couponStorage';
import { getCurrentMonth } from './dateUtils';

// Get current coupons from memory or storage
export const useCoupons = () => {
  const [coupons, setCoupons] = useState<Coupon[]>(initialCoupons);
  
  // Load coupons from localStorage on first render
  useEffect(() => {
    // Sempre usa dados iniciais na primeira carga para garantir que temos os dados corretos
    const loadedCoupons = loadCoupons();
    
    // Make all unredeemed coupons available initially
    const updatedCoupons = loadedCoupons.map(coupon => {
      return {
        ...coupon,
        available: !coupon.redeemed
      };
    });
    
    setCoupons(updatedCoupons);
    console.log('Updated coupons:', updatedCoupons);
  }, []);
  
  // Save to localStorage whenever coupons change
  useEffect(() => {
    saveCoupons(coupons);
  }, [coupons]);
  
  // Toggle between group 1 and group 2
  const toggleCouponGroup = (group: CouponGroup) => {
    // This method now only affects the UI display, not the actual availability
    setCoupons(prev => [...prev]); // Just trigger a re-render
  };
  
  // Mark a coupon as redeemed
  const redeemCoupon = (couponId: string) => {
    setCoupons(currentCoupons => {
      const couponToRedeem = currentCoupons.find(c => c.id === couponId);
      if (!couponToRedeem) return currentCoupons;
      
      // Update the coupon being redeemed
      const updatedCoupons = currentCoupons.map(coupon => {
        if (coupon.id === couponId) {
          return {
            ...coupon,
            redeemed: true,
            redeemedAt: new Date(),
            available: false
          };
        }
        
        // Block all other coupons in the same group
        if (coupon.group === couponToRedeem.group && !coupon.redeemed) {
          return {
            ...coupon,
            available: false
          };
        }
        
        return coupon;
      });
      
      return updatedCoupons;
    });
  };
  
  // Reset all coupons (admin function)
  const resetCouponsForNewMonth = () => {
    localStorage.removeItem('coupons'); // Clear existing data to force reload
    setCoupons(initialCoupons.map(coupon => ({
      ...coupon,
      redeemed: false,
      available: true // All cupons start as available
    })));
  };
  
  // Get coupons for a specific group
  const getCouponsByGroup = (group: CouponGroup) => {
    return coupons.filter(coupon => coupon.group === group);
  };
  
  // Get all available coupons
  const getAvailableCoupons = () => {
    return coupons.filter(coupon => coupon.available);
  };
  
  // Get all redeemed coupons
  const getRedeemedCoupons = () => {
    return coupons.filter(coupon => coupon.redeemed);
  };
  
  return {
    coupons,
    redeemCoupon,
    toggleCouponGroup,
    resetCouponsForNewMonth,
    getAvailableCoupons,
    getRedeemedCoupons,
    getCouponsByGroup
  };
};
