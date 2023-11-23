import { useContext, useEffect } from 'react';

import { useForm } from "react-hook-form";
import useAxiosFetch from '../useAxiosFetch';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { auth } from '../../utils/APIs/headers';
import { AuthContext } from '../../context/store';
import { CONTACT_DETAILS_EP } from '../../utils/constants/url';
import { updateContactDetails } from '../../redux/slices/userSlice';

const useEditContactDetails = () => {
  const navigation = useNavigation()
  const { control, handleSubmit } = useForm();
  const { fetchAPI, data, loading, error } = useAxiosFetch();
  
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);
  const config = auth(authCtx.token);

  const onSubmit = async (formData) => {
    if(user && (formData.email != user?.email || formData.mobile != user?.mobile)) 
      await fetchAPI('put', CONTACT_DETAILS_EP,  formData, config);
    else alert("Details not changed!");
  }

  useEffect(() => {
    if(!loading && !error) {
      if(data?.success) {
        alert("Details Changed!");
        // clear api state
        dispatch(updateContactDetails({ 
          user: { 
            ...user, 
            email: data.body.email, 
            mobile: data.body.mobile, 
          },
          date: new Date().getTime()
        }));
        // navigation.navigate("AccountConfirmarion");
      }
    }
  }, [data, loading, error]);

  return { loading, error, control, handleSubmit: () => handleSubmit(onSubmit) };
}

export default useEditContactDetails;