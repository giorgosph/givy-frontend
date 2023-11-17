import { useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';

import { AuthContext } from '../../context/store';
import { LOGIN_EP } from '../../utils/constants/url';

const useLogin = () => {
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error, setData } = useAxiosFetch();
  const authCtx = useContext(AuthContext);

  const onSubmit = async (formData) => await fetchAPI('put', LOGIN_EP,  formData);

  useEffect(() => {
    if(!loading && !error) {
      if(data.success) {
        alert(data.message);
        authCtx.authenticate(data.body.token);
      } else if(data) alert(data.message);
    }
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useLogin;