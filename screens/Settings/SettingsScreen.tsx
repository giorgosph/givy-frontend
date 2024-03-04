import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AuthContext } from "../../context/store";

import Header from "../../components/general/Header";
import UserSettings from "../../components/settings/UserSettings";
import MainContainer from "../../components/general/MainContainer";
import SharedSettings from "../../components/settings/SharedSettings";
import TopClientSettings from "../../components/settings/TopClientSettings";
import BottomClientSettings from "../../components/settings/BottomClientSettings";

import { MAIN_HEIGHT } from "../../utils/constants/styles/dimensions";
import {
  DefaultSettingsTabProps,
  SettingsScreenProps,
} from "../../utils/navigation/types";

const SettingsScreen = ({
  navigation,
}: SettingsScreenProps | DefaultSettingsTabProps) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header inSettings showSettings={authCtx.isAuthenticated} />
      <MainContainer centered>
        <View style={styles.container}>
          {!authCtx.isAuthenticated ? (
            <UserSettings
              navigation={navigation as DefaultSettingsTabProps["navigation"]}
            />
          ) : (
            <TopClientSettings
              navigation={navigation as SettingsScreenProps["navigation"]}
              logout={authCtx.logout}
            />
          )}

          <SharedSettings
            navigation={navigation as SettingsScreenProps["navigation"]}
          />

          {authCtx.isAuthenticated && (
            <BottomClientSettings
              navigation={navigation as SettingsScreenProps["navigation"]}
            />
          )}
        </View>
      </MainContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: MAIN_HEIGHT,
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default SettingsScreen;
