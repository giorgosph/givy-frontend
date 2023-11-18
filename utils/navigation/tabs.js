import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../../components/icons/HomeIcon"
import UserIcon from "../../components/icons/UserIcon"
import SearchIcon from "../../components/icons/SearchIcon"
import SettingsIcon from "../../components/icons/SettingsIcon"

import { ClientHomeTab, ClientProfileTab, ClientSearchTab } from "./clientNav";
import { DefaultHomeTab, DefaultProfileTab, DefaultSettingsTab } from "./defaultNav";

const Tab = createBottomTabNavigator();

/* ----------------------- User Tabs ----------------------- */
/* --------------------------------------------------------- */

export function defaultTabs() {
  return (
    <Tab.Group screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="DefaultHomeTab"
        component={DefaultHomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="DefaultProfileTab"
        component={DefaultProfileTab}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="DefaultSettingsTab"
        component={DefaultSettingsTab}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </Tab.Group>
  );
}

/* ----------------------- Client Tabs ----------------------- */
/* ----------------------------------------------------------- */

export function clientTabs() {
  return (
    <Tab.Group screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="ClientHomeTab"
        component={ClientHomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ClientSearchTab"
        component={ClientSearchTab}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />

      <Tab.Screen
        name="ClientProfileTab"
        component={ClientProfileTab}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tab.Group>
  );
}