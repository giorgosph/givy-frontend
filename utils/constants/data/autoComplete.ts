/* -------------------------------------------------------------------------- *
*     Can be used when using CustomInput (or when taking input from user)
*    to set the type of the input element for SEO purposes (e.g. autofill).
*  -------------------------------------------------------------------------- */

export type AutoCompleteType = typeof autoComplete[keyof typeof autoComplete];

export const autoComplete = {
  additionalName: 'additional-name' as const,
  addressLine1: 'address-line1' as const,
  addressLine2: 'address-line2' as const,
  ccNumber: 'cc-number' as const,
  country: 'country' as const,
  currentPassword: 'current-password' as const,
  email: 'email' as const,
  familyName: 'family-name' as const,
  givenName: 'given-name' as const,
  honorificPrefix: 'honorific-prefix' as const,
  honorificSuffix: 'honorific-suffix' as const,
  name: 'name' as const,
  newPassword: 'new-password' as const,
  off: 'off' as const,
  oneTimeCode: 'one-time-code' as const,
  postalCode: 'postal-code' as const,
  streetAddress: 'street-address' as const,
  tel: 'tel' as const,
  username: 'username' as const,
} as const;
