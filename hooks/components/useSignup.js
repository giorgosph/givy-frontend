import { useContext } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';

import { AuthContext } from '../../context/store';
import { SIGNUP_EP } from '../../utils/constants/url';

const useSignup = () => {
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (formData) => {
    console.log("onSubmit SIGNUP:\n", formData);
    await fetchAPI('post', formData, SIGNUP_EP);

    if(!loading && !error) {
      if(data.success) {
        alert("Acount Created!\n Logging in ...");
        authCtx.authenticate(data.body.token);
      } else alert(`${data.body.type} is already registered!`);
    }
  };

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useSignup;