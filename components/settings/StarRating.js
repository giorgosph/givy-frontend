import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { useWatch } from "react-hook-form";
import { FontAwesome } from '@expo/vector-icons';

import { PIXELS } from "../../utils/constants/styles/dimensions";

const StarRating = ({ control, setValue }) => {
  const value = useWatch({
    control,
    name: "rating",
  })

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity
          key={star}
          onPress={() => setValue('rating', star)}
          activeOpacity={0.7}
          style={styles.star}
        >
          <FontAwesome
            name={star <= value ? 'star' : 'star-o'}
            size={30}
            color={star <= value ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: PIXELS,
  },
  star: {
    marginHorizontal: PIXELS / 8,
  }
});

export default StarRating;
