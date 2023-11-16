import { useContext } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';

import { AuthContext } from '../../context/store';
import { LOGIN_EP } from '../../utils/constants/url';

const useLogin = () => {
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (formData) => {
    console.log("onSubmit SIGNUP:\n", formData);
    await fetchAPI('put', formData, LOGIN_EP);

    if(!loading && !error) {
      if(data.success) {
        alert(data.message);
        authCtx.authenticate(data.body.token);
      } else alert(data.message);
    }
  };

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useLogin;