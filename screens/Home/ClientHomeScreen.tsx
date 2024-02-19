import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";

import { AuthContext } from "../../context/store";
import { HEADING_COLOR } from "../../utils/constants/styles/colors";
import { ClientHomeScreenProps } from "../../utils/navigation/types";
import { PIXELS, WIDTH } from "../../utils/constants/styles/dimensions";
import { confirmationTypes as CT } from "../../utils/constants/data/confirmationTypes";

import useModal from "../../hooks/useModal";
import { mobileInfo } from "../../utils/constants/data/modalInfo";


const ClientHomeScreen = ({ navigation }: ClientHomeScreenProps) => {
  const { setVisible, renderModal } = useModal();
  const authCtx = useContext(AuthContext);
  
  useEffect(() => {
    authCtx.tempToken && navigation.navigate("AccountConfirmation", { type: CT.EMAIL });
    // TODO -> check if mobile is confirmed
    // authCtx.token && setVisible(mobileInfo(navigation, () => 0));
  }, []);

  return (
    <>
      {renderModal()}
      <Header />
      <MainContainer>
        <View style={styles.contentLeftWrap}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec
            congue sapien.Nullam nisl dolor,
          </Text>
        </View>
        <View style={styles.contentRightWrap}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla a ultrices quam, nec
            congue sapien.Nullam nisl dolor,
          </Text>
        </View>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  contentLeftWrap: {
    width: WIDTH * 3 / 4,
    height: '50%',
    paddingLeft: PIXELS,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  contentRightWrap: {
    height: '50%',
    marginLeft: WIDTH / 4 + PIXELS,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '400',
    color: HEADING_COLOR,
    textTransform: 'capitalize',
  },
});

export default ClientHomeScreen;