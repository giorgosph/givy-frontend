import { useContext, useEffect, useState } from 'react';

import useAxiosFetch from '../useAxiosFetch';
import { AuthContext } from '../../context/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import isEqual from '../../utils/isEqual';
import { auth } from '../../utils/APIs/headers';
import { CONTACT_DETAILS_EP, SHIPPING_DETAILS_EP } from '../../utils/constants/url';

import { setUser, updateContactDetails, updateShippingDetails } from '../../redux/slices/userSlice';

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

/* --------------------------------------------------- */

const usePersonalDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const [editShipping, setEditShipping] = useState(false);

  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
 
  const authCtx = useContext(AuthContext);
  const navigation = useNavigation();
  const config = auth(authCtx.token);

  const onSubmitShipping = async (formData) => {
    if(!isEqual(shippingDetails(user), formData)) 
      await fetchAPI('put', SHIPPING_DETAILS_EP,  formData, config);
    else {
      alert("Your details are already up to date!");
      setEditShipping(false);
    }
  }

  const onSubmitContact = async (formData) => {
    if(!isEqual(contactDetails(user), formData))  
      await fetchAPI('put', CONTACT_DETAILS_EP,  formData, config);
    else {
      alert("Your details are already up to date!");
      setEditContact(false);
    }
  }

  // NOTE: No need to refetch data as user's details can only be changed by the user.

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        if(data.body?.shippingDetails) {
          dispatch(updateShippingDetails({ user: data.body.shippingDetails, date: new Date().getTime()}));
          alert("Details Updated Successfully!");
          setEditShipping(false);
        } else if(data.body?.contactDetails) {
          const { email, mobile } = data.body.contactDetails;
          
          dispatch(updateContactDetails({ email, mobile, date: new Date().getTime() }));
          alert("Details Changed!");
          setEditContact(false);
          // navigation.navigate("AccountConfirmarion");
        } 

        // clear loading, error, data, state ??(here)
      }
    }

    // abort request if user leave the component  and clear api state
  }, [data, loading, error]);

  return { 
    state: {
      api: { loading, error },
      screen: { 
        contact: editContact, setContact: setEditContact,
        shipping: editShipping, setShipping: setEditShipping
      },
    },
    callback: {
      contact: onSubmitContact,
      shipping: onSubmitShipping,
    },
    user: user,
  };
}

export default usePersonalDetails;