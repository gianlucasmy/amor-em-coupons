
import { Coupon } from './couponTypes';
import { initialCoupons } from './couponInitialData';

// Força limpar localStorage na inicialização para garantir uso dos dados corretos
const clearLocalStorage = () => {
  try {
    localStorage.removeItem('coupons');
    console.log("Storage cleared to ensure correct data");
  } catch (e) {
    console.error("Error clearing storage", e);
  }
};

// Executar a limpeza imediatamente
clearLocalStorage();

// Load coupons from local storage or use initial data
export const loadCoupons = (): Coupon[] => {
  const storedCoupons = localStorage.getItem('coupons');
  if (storedCoupons) {
    try {
      const parsedCoupons = JSON.parse(storedCoupons);
      console.log("Loaded coupons from storage:", parsedCoupons);
      return parsedCoupons;
    } catch (e) {
      console.error('Error parsing stored coupons', e);
      console.log("Using initial coupons instead");
      return initialCoupons;
    }
  }
  console.log("No stored coupons found, using initial data");
  return initialCoupons;
};

// Save coupons to local storage
export const saveCoupons = (coupons: Coupon[]) => {
  localStorage.setItem('coupons', JSON.stringify(coupons));
  console.log("Saved coupons to storage:", coupons);
};
