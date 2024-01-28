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
  password: string;
  confirmPassword: string;
};