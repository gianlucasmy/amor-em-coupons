
// Define the common types used across the coupon system

export type CouponGroup = "group1" | "group2";

export interface Coupon {
  id: string;
  title: string;
  description: string;
  group: CouponGroup;
  available: boolean;
  image: string;
  whatsappMessage: string;
  redeemed: boolean;
  redeemedAt?: Date;
  month?: number; // Month when this coupon is available (1-12)
}
