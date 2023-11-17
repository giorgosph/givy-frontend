import { useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';

import { AuthContext } from '../../context/store';
import { SIGNUP_EP } from '../../utils/constants/url';

const useSignup = () => {
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (formData) => await fetchAPI('post', SIGNUP_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        alert("Acount Created!\n Logging in ...");
        authCtx.authenticate(data.body.token);
      } else if(data) alert(`${data.body.type} is already registered!`);
    }
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useSignup;