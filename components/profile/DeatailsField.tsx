import React from "react";
import { View, StyleSheet } from "react-native";

import CustomText from "../general/CustomText";
import CustomTitle from "../general/CustomTitle";

import { PIXELS } from "../../utils/constants/styles/dimensions";

/* ------ Types ------ */
type PropsType = {
  title: string;
  text: string;
};

/* ------------------- */

const DetailsField = (props: PropsType) => {
  const { title, text } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <CustomTitle text={title} size={5}/>
      </View>
      <CustomText text={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: PIXELS / 4,
  },
  titleContainer: {
    marginHorizontal: PIXELS / 2,
  },
});

export default DetailsField;
