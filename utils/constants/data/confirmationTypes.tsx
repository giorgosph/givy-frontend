/* --------------------------------------------------- *
 *      Use for passing Account Confirmation prop. 
 *  ---------------------------------------------------- */

/* ----------- Types ----------- */
export type ConfirmationValueType = 'email' | 'mobile';

export type ConfirmationType = {
  value: ConfirmationValueType;
  text: {
    buttonTitle: string;
    title: string;
    text: string;
  };
};

/* ----------------------------- */

export const confirmationTypes: Record<string, ConfirmationType> = {
  EMAIL: {
    value: 'email',
    text: {
      buttonTitle: "Resend Email",
      title: "Email Address Confirmation",
      text: "We have sent you a confirmation code.\nIf you can't find the email, kindly check your junk folder."
    },
  },
  MOBILE: {
    value: 'mobile',
    text: {
      buttonTitle: "Resend SMS",
      title: "Phone Number Confirmation",
      text: "We have sent you a confirmation code via SMS."
    }
  },
};
