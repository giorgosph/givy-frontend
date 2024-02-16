import { RangeType } from "./helperTypes";

export type CountdownTimeType = {
  days: number;
  hours: RangeType<24>;
  minutes: RangeType<60>;
  seconds: RangeType<60>;
  closingSoon?: boolean;
  expired: boolean;
};

/* --------------------- User types -------------------- */
/* ----------------------------------------------------- */

export type ContactDetailsType = {
  email: string;
  mobile?: number;
};

export type ShippingDetailsType = {
  country?: string;
  city?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
};

export type UserDetailsType = {
  username: string;
  firstName: string;
  lastName: string;
} & ContactDetailsType &
  ShippingDetailsType;

/* --------------------- Draw types -------------------- */
/* ----------------------------------------------------- */

export type DrawType = {
  id: number;
  title: string;
  brief: string;
  plan: "basic" | "premium" | "platinum";
  imagePath?: string;
  country?: string;
  location: string;
  category:
    | "general"
    | "electronics"
    | "home"
    | "clothing"
    | "personal_care"
    | "vacation"
    | "learning"
    | "gaming"
    | "stationery"
    | "hospitality";
  openingDate: string;
  creationDate: string;
  closingDate: string;
  totalPrice?: number;
};

export type ItemType = {
  id: number;
  drawId: number;
  title: string;
  description: string;
  imagePath: string;
  brief: string;
  price: number;
  winner?: string;
};

export type WinnersType = {
  [index: number]: string;
};
