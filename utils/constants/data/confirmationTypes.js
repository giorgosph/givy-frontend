/* --------------------------------------------------- *
*      Use for passing Account Confirmation prop. 
*  ---------------------------------------------------- */

export const confirmationTypes = {
  EMAIL: {
    value: 'email',
    text: {
      buttonTitle: "Resend Email",
      title:  "Email Address Confirmation",
      text: "We have send you a confirmation code.\nIf you can't find the email kindly check your junk folder." 
    },
  },
  MOBILE: {
    value: 'mobile',
    text: {
      buttonTitle: "Resend SMS",
      title: "Phone Number Confirmation",
      text: "We have send you a confirmation code via SMS."
    }
  },
};