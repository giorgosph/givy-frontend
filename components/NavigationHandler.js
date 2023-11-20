import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NAV_HEIGHT } from "../utils/constants/styles/dimensions";
import { ACTIVE_ICON_COLOR, BACKGROUND_COLOR, INACTIVE_ICON_COLOR } from "../utils/constants/styles/colors";

import useNavigator from "../hooks/components/useNavigator";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const NavigationHandler = () => {
  const { tabsToRender, onLayoutRootView } = useNavigator();

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: ACTIVE_ICON_COLOR,
          tabBarInactiveTintColor: INACTIVE_ICON_COLOR,
        }}
      >
        {tabsToRender}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: "100vw",
    height: NAV_HEIGHT, 
    backgroundColor: BACKGROUND_COLOR, 
    borderBlockColor: BACKGROUND_COLOR,
    shadowColor: '#fff',
  }
});

export default NavigationHandler;