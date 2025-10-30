import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import style from "@/styles/tab";

import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Department from "../pages/Department";
import Chat from "../pages/Chat";

const tabs = [
  { name: "Upload", label: "Upload", iconSet: Feather, icon: "upload", component: Upload },
  { name: "Home", label: "Home", iconSet: Ionicons, icon: "analytics-outline", component: Home },
  { name: "Department", label: "Departamento", iconSet: MaterialCommunityIcons, icon: "office-building-outline", component: Department },
  { name: "Chat", label: "Chat", iconSet: Ionicons, icon: "chatbubble-ellipses-outline", component: Chat },
];

export default {
  Screen: ({ activeScreen }: { activeScreen: string }) => {
    const currentTab = tabs.find((tab) => tab.name === activeScreen);
    if (!currentTab) return null;
    const Component = currentTab.component;
    return <Component />;
  },

  Bar: ({ activeScreen, setActiveScreen }: any) => (
    <View style={style.container}>
      {tabs.map((tab) => {
        const focused = activeScreen === tab.name;
        const IconComponent = tab.iconSet;

        return (
          <TouchableOpacity
            key={tab.name}
            style={style.tabButton}
            activeOpacity={0.8}
            onPress={() => setActiveScreen(tab.name)}
          >
            <View style={[style.iconWrapper, focused && style.focusedCircle]}>
              <IconComponent
                name={tab.icon as any}
                size={26}
                color={focused ? "#fff" : "#e0e0e0"}
              />
            </View>
            <Text style={[style.label, { color: focused ? "#fff" : "#e0e0e0" }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  ),
};
