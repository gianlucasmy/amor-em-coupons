
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
    const loadedCoupons = loadCoupons();
    
    // Update availability based on the current month
    const currentMonth = getCurrentMonth();
    console.log('Current month:', currentMonth);
    
    const updatedCoupons = loadedCoupons.map(coupon => {
      // Check if any coupon in this group has been redeemed in the current month
      const hasRedeemedCouponInGroup = loadedCoupons.some(c => 
        c.group === coupon.group && 
        c.redeemed && 
        c.redeemedAt && 
        new Date(c.redeemedAt).getMonth() + 1 === currentMonth
      );

      // For each group, make available:
      // 1. The earliest unredeemed coupon for the current month if none redeemed yet
      // 2. Or nothing if a coupon from this group has been redeemed this month
      let shouldBeAvailable = false;
      
      if (!coupon.redeemed && !hasRedeemedCouponInGroup) {
        // Find the earliest unredeemed coupon in this group
        const earliestUnredeemed = loadedCoupons
          .filter(c => c.group === coupon.group && !c.redeemed)
          .sort((a, b) => (a.month || 999) - (b.month || 999))[0];
        
        // Make it available if this is that coupon
        shouldBeAvailable = coupon.id === earliestUnredeemed?.id;
      }
      
      return {
        ...coupon,
        available: shouldBeAvailable
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
      
      const currentMonth = getCurrentMonth();
      
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
        
        // Lock all remaining coupons in the same group until next month
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
    setCoupons(initialCoupons.map(coupon => ({
      ...coupon,
      redeemed: false,
      available: coupon.month === 1 // Only first month coupons start as available
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
