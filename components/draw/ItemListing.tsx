import React from "react";
import { View, StyleSheet, Text } from "react-native";

import CustomTitle from "../general/CustomTitle";
import CustomText from "../general/CustomText";

import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  AUTH_ACTIVE_COLOR,
  HEADING_BRIGHT_COLOR,
  HEADING_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";
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
        {/* <CustomTitle text={item?.title} size={3} extraStyles={styles.title} /> */}
        {/* <View style={styles.priceContainer}> */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.textDesc}>{item.description}</Text>

        <Text style={styles.textPrice}>Price</Text>
        <Text style={styles.textPriceValue}>£{item.price}</Text>
        {/* </View> */}
        {/* <CustomText
          text={`£${item?.price}`}
          extraStyles={[styles.text, { paddingTop: PIXELS / 4 }]}
          title={"Price"}
          horizontal
        />
        <CustomText
          text={item?.description}
          extraStyles={styles.text}
          title={"Description"}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: PIXELS,
    marginBottom: PIXELS / 2,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: AUTH_ACTIVE_COLOR,
  },
  priceContainer: {
    width: "100%",
  },
  textPrice: {
    fontSize: 12,
    fontWeight: "300",
    color: HEADING_BRIGHT_COLOR,
  },
  textPriceValue: {
    fontSize: 18,
    fontWeight: "500",
    color: HEADING_COLOR,
  },
  textDesc: {
    fontSize: 11,
    fontWeight: "500",
    marginBottom: PIXELS / 2,
    color: HEADING_FADE_COLOR,
    position: "relative",
    bottom: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: HEADING_COLOR,
    textShadowColor: "#000",
    textShadowRadius: 2,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  text: {
    marginBottom: PIXELS / 4,
  },
});

export default ItemListing;
