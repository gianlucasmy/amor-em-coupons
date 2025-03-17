
import { Coupon } from './couponTypes';
import { initialCoupons } from './couponInitialData';

// Load coupons from local storage or use initial data
export const loadCoupons = (): Coupon[] => {
  const storedCoupons = localStorage.getItem('coupons');
  if (storedCoupons) {
    try {
      return JSON.parse(storedCoupons);
    } catch (e) {
      console.error('Error parsing stored coupons', e);
      return initialCoupons;
    }
  }
  return initialCoupons;
};

// Save coupons to local storage
export const saveCoupons = (coupons: Coupon[]) => {
  localStorage.setItem('coupons', JSON.stringify(coupons));
};
