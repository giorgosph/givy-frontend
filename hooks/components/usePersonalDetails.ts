import { useContext, useEffect, useState } from "react";

import useModal from "../useModal";
import useAxiosFetch from "../useAxiosFetch";
import { AuthContext } from "../../context/store";
import { useNavigation } from "@react-navigation/native";

import { HttpStatusCode } from "axios";
import { RootState } from "../../redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  updateEmail,
  updateMobile,
  updateShippingDetails,
} from "../../redux/slices/userSlice";

import { CustomModalVisibleType } from "../../components/general/CustomModal";

import isEqual from "../../utils/isEqual";
import log from "../../utils/logger";
import { apiStatus } from "../../utils/constants/data/apiStatus";
import { UserDetailsResponseType } from "../../utils/types/responseTypes";
import {
  contactWarning,
  mobileInfo,
} from "../../utils/constants/data/modalInfo";
import {
  CONTACT_DETAILS_EP,
  SHIPPING_DETAILS_EP,
} from "../../utils/constants/url";
import {
  ContactDetailsFromType,
  ShippingDetailsFromType,
} from "../../utils/constants/data/formTypes";

/* ---------------------------------------------------------------
 * --------------- Use when editing user's details ---------------
 * --------------------------------------------------------------- */

const contactDetails = (user) => ({
  // TODO -> specify
  email: user.email,
  mobile: user?.mobile,
});

const shippingDetails = (user) => ({
  country: user?.country,
  city: user?.city,
  address1: user?.address1,
  address2: user?.address2,
  postalCode: user?.postalCode,
});

let modalInfo: CustomModalVisibleType;

/* --------------------------------------------------- */

const usePersonalDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const [editShipping, setEditShipping] = useState(false);

  const { setVisible, renderModal } = useModal();
  const { fetchAPI, data, status, statusCode } =
    useAxiosFetch<UserDetailsResponseType>();

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const authCtx = useContext(AuthContext);

  const navigation = useNavigation();

  const onSubmitShipping = async (formData: ShippingDetailsFromType) => {
    if (!isEqual(shippingDetails(user), formData)) {
      await fetchAPI({
        type: "put",
        endpoint: SHIPPING_DETAILS_EP,
        body: formData,
        authHeader: true,
      });
    } else {
      alert("Your details are already up to date!");
      setEditShipping(false);
    }
  };

  const onSubmitContact = async (formData: ContactDetailsFromType) => {
    if (!isEqual(contactDetails(user), formData)) {
      const fetch = async () =>
        await fetchAPI({
          type: "put",
          endpoint: CONTACT_DETAILS_EP,
          body: formData,
          authHeader: true,
        });

      modalInfo = await contactWarning(fetch, () => setEditContact(false));
      setVisible(modalInfo);
    } else {
      alert("Your details are already up to date!");
      setEditContact(false);
    }
  };

  // NOTE: No need to refetch data as user's details can only be changed by the user.

  useEffect(() => {
    if (status === apiStatus.SUCCESS) {
      if (data?.success) {
        if (data.body?.shippingDetails) {
          dispatch(updateShippingDetails({ user: data.body.shippingDetails }));
          setEditShipping(false);

          alert("Details Updated Successfully!");
        } else if (data.body?.contactDetails) {
          const { email, mobile } = data.body.contactDetails;

          // Mobile has been updated
          if (mobile) {
            dispatch(updateMobile({ mobile }));
            if (email) {
              modalInfo = mobileInfo(navigation, () => setEditContact(false));
              setVisible(modalInfo);
            }
            // TODO -> open modal to navigate to account confirmation or close edit contact
          }

          // Email has been updated
          if (email) {
            dispatch(updateEmail({ email }));
            authCtx.logout();
            alert("Email Changed!");
          }
        }
      }
    } else if (status === apiStatus.ERROR) {
      if (!data?.success) {
        if (statusCode == HttpStatusCode.UnprocessableEntity)
          alert("Invalid email address provided!");
      } else if (!!statusCode) {
        log({ type: "e", message: `Unexpected error:\n ${data}` });
        alert(
          "Server Error!\nKindly Contact Support Team\nDev message: Unexpected Error!"
        );
      }
    }

    // abort request if user leave the component  and clear api state
  }, [status]);

  return {
    state: {
      reqStatus: status,
      screen: {
        contact: editContact,
        setContact: setEditContact,
        shipping: editShipping,
        setShipping: setEditShipping,
      },
    },
    callback: {
      contact: onSubmitContact,
      shipping: onSubmitShipping,
      renderModal,
    },
    user: user,
  };
};

export default usePersonalDetails;
