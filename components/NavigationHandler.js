import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useNavigator from "../hooks/useNavigator";
import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR, INACTIVE_ICON_COLOR } from "../utils/styles/colors";
import { NAV_HEIGHT } from "../utils/styles/dimensions";

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
            width: "100vw",
            height: NAV_HEIGHT, 
            backgroundColor: BACKGROUND_COLOR, 
            borderBlockColor: BACKGROUND_COLOR,
            shadowColor: '#fff',
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