import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AuthContext } from "../../context/store";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";
import SettingButton from "../../components/settings/SettingButton";
import SharedSettings from "../../components/settings/SharedSettings";
import UserSettings from "../../components/settings/UserSettings";
import ClientSettings from "../../components/settings/ClientSettings";

const SettingsScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);

  const navTo = (screen) => () => navigation.navigate(screen);

  return (
   <>
    <Header inSettings />
    <MainContainer centered>
      {!authCtx.isAuthenticated ? 
        <UserSettings navTo={navTo} /> : <ClientSettings navTo={navTo} logout={authCtx.logout} />
      }
      <SharedSettings navTo={navTo} />
    </MainContainer>
   </>
  )
};

export default SettingsScreen;
