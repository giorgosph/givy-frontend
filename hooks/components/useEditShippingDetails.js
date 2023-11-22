import { useEffect } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';
import { useNavigation } from '@react-navigation/native';

import { SHIPPING_DETAILS_EP } from '../../utils/constants/url';

const useEditShippingDetails = () => {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const onSubmit = async (formData) => await fetchAPI('put', SHIPPING_DETAILS_EP,  formData);

  useEffect(() => {
    if(!loading && !error) alert("Details Updated Successfully!");
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useEditShippingDetails;