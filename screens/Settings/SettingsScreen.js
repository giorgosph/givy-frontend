import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AuthContext } from "../../context/store";

import Header from "../../components/general/Header";
import MainContainer from "../../components/general/MainContainer";
import SettingButton from "../../components/settings/SettingButton";
import SharedSettings from "../../components/settings/SharedSettings";
import UserSettings from "../../components/settings/UserSettings";
import TopClientSettings from "../../components/settings/TopClientSettings";
import BottomClientSettings from "../../components/settings/BottomClientSettings";

const SettingsScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);

  const navTo = (screen) => () => navigation.navigate(screen);

  return (
   <>
    <Header inSettings />
    <MainContainer centered >
      <View style={styles.container}>
        {!authCtx.isAuthenticated ? 
          <UserSettings navTo={navTo} /> : <TopClientSettings navTo={navTo} logout={authCtx.logout} />
        }
        <SharedSettings navTo={navTo} />
        {authCtx.isAuthenticated && <BottomClientSettings navTo={navTo} />}
      </View>
    </MainContainer>
   </>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})

export default SettingsScreen;
