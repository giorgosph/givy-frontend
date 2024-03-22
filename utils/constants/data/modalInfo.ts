import { DefaultProfileTabParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { confirmationTypes as CT } from "./confirmationTypes";
import { CustomModalVisibleType } from "../../../components/general/CustomModal";

/* -------------------------------------------------------- *
 *      Use when you want to display the Custom Modal.
 *    Create different functions depending on the scenario.
 *  -------------------------------------------------------- */

const mobileInfo = (
  navigation: NativeStackNavigationProp<DefaultProfileTabParamList, "Auth">,
  proceed: () => any
) => {
  const info: CustomModalVisibleType = {
    title: "Phone Number Confirmation",
    text: "We are asking to confirm your phone number in order to notify you when you have won or contact you for delivery instructions.",
    buttonText: "Confirm",
    buttonText2: "Not Now",
    onPress: () =>
      navigation.navigate("AccountConfirmation", { type: CT.MOBILE }),
    onPress2: !!proceed && proceed,
  };

  return info;
};

const contactWarning = async (
  fetch: () => Promise<void>,
  closeEditContact: () => any
) => {
  const info: CustomModalVisibleType = {
    title: "Warning Updating Contact Information",
    text: "We want to inform you that in case you are changing your email address, you will automatically be logged out of your account until tou confirm your new email address.",
    buttonText: "Confirm",
    buttonText2: "Cancel",
    onPress: fetch, // required
    onPress2: closeEditContact, // required
  };

  return info;
};

export { mobileInfo, contactWarning };
