import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/store";

import Header from "../../components/general/Header";
import UserSettings from "../../components/settings/UserSettings";
import MainContainer from "../../components/general/MainContainer";
import SharedSettings from "../../components/settings/SharedSettings";
import TopClientSettings from "../../components/settings/TopClientSettings";
import BottomClientSettings from "../../components/settings/BottomClientSettings";

import { clearUser } from "../../redux/slices/userSlice";
import { clearDraws } from "../../redux/slices/drawSlice";

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);

  const navTo = (screen) => () => navigation.navigate(screen);

  const logout = () => {
    authCtx.logout();
    dispatch(clearUser);
    dispatch(clearDraws);
  };

  return (
   <>
    <Header inSettings />
    <MainContainer centered >
      <View style={styles.container}>
        {!authCtx.isAuthenticated ? 
          <UserSettings navTo={navTo} /> : <TopClientSettings navTo={navTo} logout={logout} />
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
