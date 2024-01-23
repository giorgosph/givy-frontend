import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import isEqual from '../../utils/isEqual';
import { apiStatus } from '../../utils/constants/data/apiStatus';
import { contactWarning, mobileInfo } from '../../utils/constants/data/modalInfo';
import { CONTACT_DETAILS_EP, SHIPPING_DETAILS_EP } from '../../utils/constants/url';

import { updateEmail, updateMobile, updateShippingDetails } from '../../redux/slices/userSlice';

import useModal from '../useModal';

/* ---------------------------------------------------------------
 * --------------- Use when editing user's details ---------------
 * --------------------------------------------------------------- */

const contactDetails = user => ({
  email: user?.email,
  mobile: user?.mobile
});

const shippingDetails = user => ({
  country: user?.country,
  city: user?.city,
  address1: user?.address1,
  address2: user?.address2,
  postalCode: user?.postalCode,
});

let modalInfo;

/* --------------------------------------------------- */

const usePersonalDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const [editShipping, setEditShipping] = useState(false);

  const { setVisible, renderModal } = useModal();
  const { fetchAPI, data, status, statusCode } = useAxiosFetch();
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
  const authCtx = useContext(AuthContext);
  
  const navigation = useNavigation();

  const onSubmitShipping = async (formData) => {
    if(!isEqual(shippingDetails(user), formData)) {
      await fetchAPI('put', SHIPPING_DETAILS_EP,  formData, true);
    } else {
      alert("Your details are already up to date!");
      setEditShipping(false);
    }
  };

  const onSubmitContact = async (formData) => {
    if(!isEqual(contactDetails(user), formData)) {
      const fetch = async () => await fetchAPI('put', CONTACT_DETAILS_EP,  formData, true);

      modalInfo = await contactWarning(fetch, () => setEditContact(false));
      setVisible(modalInfo);
    } else {
      alert("Your details are already up to date!");
      setEditContact(false);
    }
  };

  // NOTE: No need to refetch data as user's details can only be changed by the user.

  useEffect(() => {
    if(status === apiStatus.SUCCESS) {

      if(data.body?.shippingDetails) {
        dispatch(updateShippingDetails({ user: data.body.shippingDetails}));
        setEditShipping(false);

        alert("Details Updated Successfully!");
      } else if(data.body?.contactDetails) {
        const { email, mobile } = data.body.contactDetails;
        
        // Mobile has been updated
        if(mobile != false) {
          dispatch(updateMobile({ mobile }));
          if(email == false && mobile) {
            modalInfo = mobileInfo(navigation, () => setEditContact(false));
            setVisible(modalInfo); 
          }
          // TODO -> open modal to navigate to account confirmation or close edit contact
        }

        // Email has been updated
        if(email != false) {
          dispatch(updateEmail({ email }));
          authCtx.holdToken(authCtx.token);
          alert("Email Changed!");
        }
      } 

    } else if(status === apiStatus.ERROR) {
      if(statusCode == 422) alert("Invalid email address provided!");
    } 

    // abort request if user leave the component  and clear api state
  }, [status]);

  return { 
    state: {
      reqStatus: status,
      screen: { 
        contact: editContact, setContact: setEditContact,
        shipping: editShipping, setShipping: setEditShipping
      },
    },
    callback: {
      contact: onSubmitContact,
      shipping: onSubmitShipping,
      renderModal,
    },
    user: user,
  };
}

export default usePersonalDetails;