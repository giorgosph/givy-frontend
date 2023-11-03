import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIcon from "../../components/icons/HomeIcon"
import MessageIcon from "../../components/icons/MessageIcon"
import SearchIcon from "../../components/icons/SearchIcon"
import SettingsIcon from "../../components/icons/SettingsIcon"
import UserIcon from "../../components/icons/UserIcon"

import { HomeTab, ProfileTab, SearchTab, SettingsTab, MessageTab } from "./defaultNav";

const Tab = createBottomTabNavigator();

export function defaultTabs() {
  return (
    <Tab.Group screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={()=>HomeTab(false)}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={()=>ProfileTab(false)}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </Tab.Group>
  );
}

export function clientTabs() {
  return (
    <Tab.Group screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        component={()=>HomeTab(true)}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="MessageTab"
        component={MessageTab}
        options={{
          title: "Message",
          tabBarIcon: ({ color }) => <MessageIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={()=>ProfileTab(true)}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
        }}
      />
    </Tab.Group>
  );
}