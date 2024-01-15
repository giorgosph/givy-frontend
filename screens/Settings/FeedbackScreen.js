import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useForm } from 'react-hook-form';
import { FontAwesome } from '@expo/vector-icons'
;
import CustomInput from '../../components/general/CustomInput';
import CustomButton from '../../components/general/CustomButton';
import CustomHeader from '../../components/general/CustomHeader';
import MainContainer from '../../components/general/MainContainer';

import { allInputsRegex } from '../../utils/formValidations';
import { PIXELS } from '../../utils/constants/styles/dimensions';

const FeedbackScreen = () => {
  const { control, handleSubmit, setValue, getValues } = useForm();

  const onSubmit = (data) => {
    console.log('Feedback Data:', data);
  };

  return (
    <>
      <CustomHeader title="Feedback" />
      <MainContainer centered>
        <Text style={styles.heading}>Leave a Feedback 😊</Text>

        {/* Star Rating */}
        {/* TODO -> make different component make it better (currently not updating on correct render) */}
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setValue('rating', star)}
              activeOpacity={0.7}
            >
              <FontAwesome
                name={star <= getValues('rating') ? 'star' : 'star-o'}
                size={30}
                color={star <= getValues('rating') ? 'gold' : 'gray'}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* TODO -> extra styles */}
        {/* TODO -> test why regex validations is not working */}
        <CustomInput control={control} name="comments" rules={allInputsRegex} />
        <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} />
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
