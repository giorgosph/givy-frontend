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
  code?: string;
  password: string;
  confirmPassword: string;
};

export type ForgotPassFormType = {
  email: string;
  code: string | undefined;
  password: string  | undefined;
  confirmPassword: string  | undefined;
};