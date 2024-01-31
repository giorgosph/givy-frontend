import { CustomModalVisibleType } from '../../../components/general/CustomModal';
import { confirmationTypes as CT } from './confirmationTypes';

/* -------------------------------------------------------- *
*      Use when you want to display the Custom Modal.
*    Create different functions depending on the scenario. 
*  -------------------------------------------------------- */

const mobileInfo = (navigation, proceed: () => any) => {
  const info: CustomModalVisibleType =  {
    title: "Phone Number Confirmation",
    text: "We are asking to confirm your phone number in order to notify you when you have won or contact you for delivery instructions.",
    buttonText: "Confirm",
    buttonText2: "Not Now",
    onPress: () => {
      navigation.navigate("AccountConfirmation", { type: CT.MOBILE }); // navigation is required
      if(!!proceed) proceed();
    },
    onPress2: proceed // optional
  };

  return info;
};

const contactWarning = async (fetch: () => Promise<void>, closeEditContact: () => any) => {
  const info: CustomModalVisibleType =  {
    title: "Warning Updating Contact Information",
    text: "We want to inform you that in case you are changing your email address, you will automatically be logged out of your account until tou confirm your new email address.",
    buttonText: "Confirm",
    buttonText2: "Cancel",
    onPress: fetch, // required
    onPress2: closeEditContact, // required
  };

  return info;
};

export {
  mobileInfo,
  contactWarning,
}