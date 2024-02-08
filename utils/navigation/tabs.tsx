import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../../components/icons/HomeIcon";
import UserIcon from "../../components/icons/UserIcon";
import SearchIcon from "../../components/icons/SearchIcon";
import SettingsIcon from "../../components/icons/SettingsIcon";

import ClientHomeTab from "./stacks/ClientHomeTab";
import ClientSearchTab from "./stacks/ClientSearchTab";
import ClientProfileTab from "./stacks/ClientProfileTab";

import DefaultHomeTab from "./stacks/DefaultHomeTab";
import DefaultProfileTab from "./stacks/DefaultProfileTab";
import DefaultSettingsTab from "./stacks/DefaultSettingsTab";

import { ClientTabsParamList, DefaultTabsParamList } from "./types";

const DefaultTab = createBottomTabNavigator<DefaultTabsParamList>();
const ClientTab = createBottomTabNavigator<ClientTabsParamList>();

/* ----------------------- User Tabs ----------------------- */
/* --------------------------------------------------------- */

export function defaultTabs() {
  return (
    <DefaultTab.Group screenOptions={{ headerShown: false }}>
      <DefaultTab.Screen
        name="DefaultHomeTab"
        component={DefaultHomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <DefaultTab.Screen
        name="DefaultProfileTab"
        component={DefaultProfileTab}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
      <DefaultTab.Screen
        name="DefaultSettingsTab"
        component={DefaultSettingsTab}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </DefaultTab.Group>
  );
}

/* ----------------------- Client Tabs ----------------------- */
/* ----------------------------------------------------------- */

export function clientTabs() {
  return (
    <ClientTab.Group screenOptions={{ headerShown: false }}>
      <ClientTab.Screen
        name="ClientHomeTab"
        component={ClientHomeTab}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <ClientTab.Screen
        name="ClientSearchTab"
        component={ClientSearchTab}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />

      <ClientTab.Screen
        name="ClientProfileTab"
        component={ClientProfileTab}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </ClientTab.Group>
  );
}
