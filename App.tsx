import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import store from "./redux/store";
import { Provider } from "react-redux";

import AuthContextProvider from "./context/store";
import NavigationHandler from "./components/NavigationHandler";

import { BACKGROUND_COLOR } from "./utils/constants/styles/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} backgroundColor={BACKGROUND_COLOR} />
      <Provider store={store}>
        <AuthContextProvider>
          <SafeAreaView style={styles.androidSafeArea}>
            <NavigationHandler />
          </SafeAreaView>
        </AuthContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
  },
});
