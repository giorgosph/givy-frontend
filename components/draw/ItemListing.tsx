import React from "react";
import { View, StyleSheet } from "react-native";

import CustomTitle from "../general/CustomTitle";
import CustomText from "../general/CustomText";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import { AUTH_ACTIVE_COLOR } from "../../utils/constants/styles/colors";
import { ItemType } from "../../utils/types/objectTypes";

/* ------ Types ------ */
type PropsType = {
  item: ItemType;
};

/* ------------------- */

const ItemListing = ({ item }: PropsType) => {
  return (
    <>
      <View style={styles.container}>
        <CustomTitle text={item?.title} size={3} extraStyles={styles.title} />
        <View style={styles.textContainer}>
          <CustomText text={`£${item?.price}`} extraStyles={[styles.text, {paddingTop: PIXELS / 4}]} title={"Price"} horizontal />
          <CustomText text={item?.description} extraStyles={styles.text} title={"Description" } />
        </View>      
      </View>
      {/* button to navigate to items website ?? */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: AUTH_ACTIVE_COLOR, 
  },
  title: {
    marginBottom: PIXELS / 2, 
  },
  text: {
    marginBottom: PIXELS / 4,
  },
  textContainer: {
    width: '80%',
    marginVertical: PIXELS / 4,
  },
});

export default ItemListing;
