import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, SafeAreaView } from "react-native";

import store from "./redux/store";
import { Provider } from "react-redux";

import NavigationHandler from "./components/NavigationHandler";
import AuthContextProvider from "./context/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AuthContextProvider>
          <SafeAreaView style={styles.AdroidSafeArea}>
            <NavigationHandler />
          </SafeAreaView>
        </AuthContextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  AdroidSafeArea: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
});