import { useEffect } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';
import { useNavigation } from '@react-navigation/native';

import { CONTACT_DETAILS_EP } from '../../utils/constants/url';

const useEditContactDetails = () => {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();

  const onSubmit = async (formData) => await fetchAPI('put', CONTACT_DETAILS_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data?.success) {
        alert("Details Change!");
        navigation.navigate("AccountConfirmarion");
      }
    }
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useEditContactDetails;