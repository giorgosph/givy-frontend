import React, { useEffect, useRef, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import store from "./redux/store";
import { Provider } from "react-redux";

import AuthContextProvider from "./context/store";
import NavigationHandler from "./components/NavigationHandler";
import { RootSiblingParent } from "react-native-root-siblings";

import { HEADER_BG_COLOR } from "./utils/constants/styles/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar animated={true} backgroundColor={HEADER_BG_COLOR} />
      <Provider store={store}>
        <RootSiblingParent>
          <AuthContextProvider>
            <SafeAreaView style={styles.androidSafeArea}>
              <NavigationHandler />
            </SafeAreaView>
          </AuthContextProvider>
        </RootSiblingParent>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
  },
});
