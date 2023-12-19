export const required = {
  required: {
    value: true,
    message: "Required field"
  }
};

export const minLength = (value) => ({
  minLength: {
    value,
    message: `Should be at least ${value} characters long`
  }
});

export const maxLength = (value) => ({
  maxLength: {
    value,
    message: `Should be less than ${value} characters long`
  }
});

export const min = (value) => ({
  min: {
    value,
    message: `Should be bigger than ${value}`
  }
});

export const max = (value) => ({
  max: {
    value,
    message: `Should be smaller than ${value}`
  }
});

/* ------------------------------- Regex ------------------------------- */
/* --------------------------------------------------------------------- */

export const allInputsRegex = {
  pattern: {
    value: !(/[\'\";<>`&|\\/%\.\x00]/),
    message: 'Some characters are not allowed'
  }
}

export const spacesRegex = {
  pattern: {
    value: !(/\s/),
    message: 'No spaces are allowed'
  }
};

export const usernameRegex = {
  pattern: {
    value: /^[A-Za-z0-9.]+$/,
    message: 'Avoid using spaces or special characters except from periods'
  }
};

export const lettersRegex = {
  pattern: {
    value: /^[ A-Za-z]+$/,
    message: 'Avoid using numbers or special characters'
  }
};

export const emailRegex = {
  pattern: {
    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'Please enter a valid email address'
  }
};

export const numbersRegex = {
  pattern: {
    value: /^[0-9]+$/,
    message: 'Only numbers are allowed'
  }
};

/* ------------------------- Custom Validate ------------------------- */
/* ------------------------------------------------------------------- */

const validatePassword = {
  validate: {
    uppercase: v => /[A-Z]/.test(v) || 'Should contain at least one uppercase letter',
    lowercase: v => /[a-z]/.test(v) || 'Should contain at least one lowercase letter',
    number: v => /[0-9]/.test(v) || 'Should contain at least one number',
    passwordRegex: v => !(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F&=<>\\'"; \t\n\r]/.test(v)) || 'Some characters/spaces are not allowed'
  }  
};

const validateUsernameLogIn = {
  validate: {
    regex: v => {
      usernameRegex.pattern.value.test(v) || 
      emailRegex.pattern.value.test(v) ||
      'Provide a valid username or email address'
    },
  }  
};

const validateConfirmationCode = {
  validate: {
    length: v => String(v).length == 6 || "Invalid confirmation code length",
    number: v => /[0-9]/.test(v) || "Only numbers are allowed",
  }  
};

/* ------------------------- Specific Input Validations ------------------------- */
/* ------------------------------------------------------------------------------ */

export const usernameValidation = {
  ...required, ...minLength(3), ...maxLength(15), ...usernameRegex
};

// Do not add further validations as it accepts email 
export const usernameValidationLogIn = {
  required: usernameValidation.required,
  minLength: usernameValidation.minLength,
  ...validateUsernameLogIn
};

export const passwordValidation = {
  ...required, ...minLength(8), ...maxLength(24), ...validatePassword
};

export const confirmationCodeValidation = {
  ...required, 
  ...validateConfirmationCode
};