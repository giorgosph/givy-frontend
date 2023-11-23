import { useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import useAxiosFetch from '../useAxiosFetch';

import { auth } from '../../utils/APIs/headers';
import { AuthContext } from '../../context/store';
import { SHIPPING_DETAILS_EP } from '../../utils/constants/url';
import { updateShippingDetails } from '../../redux/slices/userSlice';

const useEditShippingDetails = (setEditShipping) => {
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);

  const onSubmit = async (formData) => await fetchAPI('put', SHIPPING_DETAILS_EP,  formData, config);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        dispatch(updateShippingDetails({ user: data.body, date: new Date().getTime()}));
        alert("Details Updated Successfully!");
        setEditShipping(false);
      }
    }
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useEditShippingDetails;