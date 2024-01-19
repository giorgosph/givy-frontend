import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { useForm } from 'react-hook-form';
;
import StarRating from '../../components/settings/StarRating';
import CustomInput from '../../components/general/CustomInput';
import CustomButton from '../../components/general/CustomButton';
import CustomHeader from '../../components/general/CustomHeader';
import MainContainer from '../../components/general/MainContainer';

import { allInputsRegex } from '../../utils/formValidations';
import { PIXELS } from '../../utils/constants/styles/dimensions';
import { apiStatus } from '../../utils/constants/data/apiStatus';

import useNotification from '../../hooks/useNotification';

const FeedbackScreen = () => {
  const { control, handleSubmit, setValue, reset } = useForm();
  
  const { sent, state, callback } = useNotification();
  const loading = state.reqStatus == apiStatus.LOADING || sent

  const onSubmit = (data) => {
    callback.feedback(data);
    reset();
  };

  return (
    <>
      <CustomHeader title="Feedback" />
      <MainContainer centered>
        <Text style={styles.heading}>Leave a Feedback 😊</Text>

        <StarRating control={control} setValue={setValue} />

        {/* TODO -> extra styles */}
        {/* TODO -> test why regex validations is not working */}
        <CustomInput control={control} name="comments" rules={allInputsRegex} />
        <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} disabled={loading} />
        <Text style={{color: 'white'}}>New Feedback will replace your old one!</Text>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: PIXELS,
    color: 'white',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: PIXELS,
  },
  commentsContainer: {
    width: '100%',
  },
});

export default FeedbackScreen;
