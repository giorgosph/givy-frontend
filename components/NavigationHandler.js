import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useNavigator from "../hooks/useNavigator";
import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR, INACTIVE_ICON_COLOR, NAV_BG_COLOR } from "../utils/styles/colors";
import { PIXELS } from "../utils/styles/dimensions";

const Tab = createBottomTabNavigator();

const NavigationHandler = () => {
  const { tabsToRender, appIsReady } = useNavigator();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
    else await SplashScreen.preventAutoHideAsync();
  }, [appIsReady]);

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            width: "100%",
            height: PIXELS * 3, 
            backgroundColor: BACKGROUND_COLOR, 
          },
          tabBarActiveTintColor: ACTIVE_ICON_COLOR,
          tabBarInactiveTintColor: INACTIVE_ICON_COLOR,
        }}
      >
        {tabsToRender}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationHandler;