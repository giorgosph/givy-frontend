import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CustomTitle from "../general/CustomTitle";

import { formatDate } from "../../utils/dataFormater";
import { DrawType } from "../../utils/types/objectTypes";
import { PIXELS } from "../../utils/constants/styles/dimensions";
import { ClientSearchTabParamList } from "../../utils/navigation/types";
import {
  AUTH_ACTIVE_COLOR,
  AUTH_INACTIVE_COLOR,
  HEADING_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";

/* ------ Types ------ */
type PropsType = {
  draw: DrawType;
  opted?: boolean;
};

/* ------------------- */

const DrawListing = (props: PropsType) => {
  const { draw, opted = false } = props;

  const navigation =
    useNavigation<
      NativeStackNavigationProp<ClientSearchTabParamList, "DrawsList">
    >();
  const handleNav = (draw: DrawType) =>
    navigation.navigate("DrawDetails", { draw });

  return (
    <TouchableOpacity
      style={[styles.container, opted && { height: 155 }]}
      onPress={() => handleNav(draw)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: draw.imagePath }}
          resizeMode="cover"
        />
      </View>
      <View style={[styles.detailsContainer, opted && { height: "100%" }]}>
        <View style={styles.detailsTitleContainer}>
          <Text style={styles.title}>{draw.title}</Text>
          <Text style={styles.textBrief}>{draw.brief}</Text>
        </View>

        <View style={styles.detailsTextContainer}>
          <Text style={styles.textTitle}>Available From</Text>
          <Text style={styles.text}>{formatDate(draw.openingDate)}</Text>

          <Text style={styles.textTitle}>Results On</Text>
          <Text style={styles.text}>{formatDate(draw.closingDate)}</Text>
        </View>
      </View>
      {!opted && (
        <View style={styles.textContainer}>
          <CustomTitle
            text="Click to Join!"
            color={HEADING_FADE_COLOR}
            extraStyles={styles.join}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    height: 200,
    padding: PIXELS / 3,
    marginVertical: PIXELS / 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: AUTH_INACTIVE_COLOR,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: AUTH_ACTIVE_COLOR,
  },
  imageContainer: {
    width: "40%",
    height: "100%",
    marginRight: PIXELS / 4,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    zIndex: 101,
  },
  detailsContainer: {
    width: "60%",
    height: "80%",
    overflow: "hidden",
  },
  detailsTitleContainer: {
    height: "50%",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  detailsTextContainer: {
    height: "50%",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 15,
    fontWeight: "800",
    textAlign: "center",
    color: HEADING_COLOR,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: HEADING_COLOR,
  },
  textTitle: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    color: HEADING_COLOR,
  },
  textBrief: {
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    color: HEADING_FADE_COLOR,
  },
  textContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 6,
    zIndex: 1000,
  },
  join: {
    textShadowColor: "black",
    textShadowRadius: 6,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    zIndex: 1001,
  },
});

export default DrawListing;
