export type LoginFormType = {
  username: string; 
  password: string;
};

export type SignupFormType = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  mobile?: number;
  password: string;
  confirmPassword: string;
  gender: string;
  country?: string;
  city?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
};

export type ResetPassFormType = {
  email?: string;
  code?: number;
  password: string;
  confirmPassword: string;
};

export type ForgotPassFormType = {
  email: string;
  code: number | undefined;
  password: string  | undefined;
  confirmPassword: string  | undefined;
};

export type ConfirmationCodeFromType = {
  code: number;
};

export type ContactDetailsFromType = {
  email: string;
  mobile?: number;
};

export type ShippingDetailsFromType = {
  country?: string;
  city?: string;
  address1?: string;
  address2?: string;
  postalCode?: string;
};

export type ContactUsFromType = {
  title: string;
  body: string;
};

export type FeedbackFormType = {
  rating: number;
  comments: string;
};