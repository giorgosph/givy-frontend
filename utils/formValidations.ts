// TODO -> Test all cases, add comment sections

export const required = {
  required: {
    value: true,
    message: "Required field",
  },
} as const;

export const minLength = (value: number) => ({
  minLength: {
    value,
    message: `Should be at least ${value} characters long`,
  },
} as const);

export const maxLength = (value: number) => ({
  maxLength: {
    value,
    message: `Should be less than ${value} characters long`,
  },
} as const);

export const min = (value: number) => ({
  min: {
    value,
    message: `Should be bigger than ${value}`,
  },
} as const);

export const max = (value: number) => ({
  max: {
    value,
    message: `Should be smaller than ${value}`,
  },
} as const);

export const usernameRegex = {
  pattern: {
    value: /^[A-Za-z0-9.]+$/,
    message: 'Avoid using spaces or special characters except periods',
  },
} as const;

export const lettersRegex = {
  pattern: {
    value: /^[ A-Za-z]+$/,
    message: 'Avoid using numbers or special characters',
  },
} as const;

export const emailRegex = {
  pattern: {
    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email address',
  },
} as const;

export const numbersRegex = {
  pattern: {
    value: /^[0-9]+$/,
    message: 'Only numbers are allowed',
  },
} as const;

export const validateAllInputs = {
  validate: (v: any) => !(/[\'\";<>`&|\\/%\.\x00]/).test(v) || 'Some characters are not allowed'
} as const;

export const validateSpaces = {
  validate: (v: any) => !(/\s/).test(v) || 'No spaces are allowed'
} as const;

const validatePassword = {
  validate: {
    uppercase: (v: string) => /[A-Z]/.test(v) || 'Should contain at least one uppercase letter',
    lowercase: (v: string) => /[a-z]/.test(v) || 'Should contain at least one lowercase letter',
    number: (v: string) => /[0-9]/.test(v) || 'Should contain at least one number',
    passwordRegex: (v: string) => !(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F&=<>\\'"; \t\n\r]/.test(v)) || 'Some characters/spaces are not allowed',
  },
} as const;

const validateUsernameLogIn = {
  validate: (v: string) => 
    usernameRegex.pattern.value.test(v) 
    || emailRegex.pattern.value.test(v) 
    || 'Provide a valid username or email address',
} as const;

const validateConfirmationCode = {
  validate: {
    length: (v: string) => String(v).length === 6 || 'Invalid confirmation code length',
    number: (v: string) => /[0-9]/.test(v) || 'Only numbers are allowed',
  },
} as const;

export const usernameValidation = {
  ...required,
  ...minLength(3),
  ...maxLength(15),
  ...usernameRegex,
};

export const usernameValidationLogIn = {
  required: usernameValidation.required,
  minLength: usernameValidation.minLength,
  ...validateUsernameLogIn,
};

export const passwordValidation = {
  ...required,
  ...minLength(8),
  ...maxLength(24),
  ...validatePassword,
};

export const confirmationCodeValidation = {
  ...required,
  ...validateConfirmationCode,
};
