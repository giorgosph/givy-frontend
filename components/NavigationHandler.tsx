import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NAV_HEIGHT } from "../utils/constants/styles/dimensions";
import { ACTIVE_ICON_COLOR, HEADER_BG_COLOR, INACTIVE_ICON_COLOR } from "../utils/constants/styles/colors";

import useNavigator from "../hooks/components/useNavigator";
import { StyleSheet } from "react-native";

import { RootTabPraramList } from "../utils/navigation/types";

const Tab = createBottomTabNavigator<RootTabPraramList>();

const NavigationHandler: React.FC = () => {
  const { tabsToRender } = useNavigator();

  return (
    <NavigationContainer>
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
    width: "100%",
    height: NAV_HEIGHT, 
    backgroundColor: HEADER_BG_COLOR, 
    borderBlockColor: HEADER_BG_COLOR,
  }
});

export default NavigationHandler;
