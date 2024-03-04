import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import DetailsField from "./DeatailsField";
import CustomTitle from "../general/CustomTitle";
import CustomButton from "../general/CustomButton";

import { UserDetailsType } from "../../utils/types/objectTypes";
import { PIXELS } from "../../utils/constants/styles/dimensions";
import {
  AUTH_ACTIVE_COLOR,
  AUTH_INACTIVE_COLOR,
  HEADING_BRIGHT_COLOR,
  HEADING_FADE_COLOR,
} from "../../utils/constants/styles/colors";

/* -------- Types -------- */
type PropsType = {
  user: UserDetailsType;
  setEditContact: React.Dispatch<React.SetStateAction<boolean>>;
  setEditShipping: React.Dispatch<React.SetStateAction<boolean>>;
};

/* ----------------------- */

const UserDetails = (props: PropsType) => {
  const { user, setEditContact, setEditShipping } = props;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <CustomTitle text={"Contact Details"} color={HEADING_BRIGHT_COLOR} />
        <View style={styles.separator} />
        <DetailsField title={"email:"} text={user.email} />
        <DetailsField title={"phone number:"} text={String(user.mobile)} />
        <CustomButton
          title={"Edit"}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => setEditContact(true)}
        />
      </View>

      <View style={styles.section}>
        <CustomTitle text={"Shipping Details"} color={HEADING_BRIGHT_COLOR} />
        <View style={styles.separator} />
        <DetailsField title={"country:"} text={user.country} />
        <DetailsField title={"city:"} text={user.city} />
        <DetailsField title={"address 1:"} text={user.address1} />
        <DetailsField title={"address 2:"} text={user.address2} />
        <DetailsField title={"postal code:"} text={user.postalCode} />
        <CustomButton
          title={"Edit"}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => setEditShipping(true)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  section: {
    width: "95%",
    alignItems: "center",
    marginVertical: PIXELS / 2,
    paddingVertical: PIXELS / 2,
    borderRadius: PIXELS,
    borderWidth: 1,
    borderColor: HEADING_FADE_COLOR,
  },
  button: {
    width: "50%",
    height: 40,
    marginTop: PIXELS,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: AUTH_ACTIVE_COLOR,
  },
  buttonText: {
    color: AUTH_ACTIVE_COLOR,
  },
  separator: {
    width: "80%",
    borderBottomColor: HEADING_FADE_COLOR,
    borderBottomWidth: 1,
    marginVertical: PIXELS / 4,
  },
});

export default UserDetails;
