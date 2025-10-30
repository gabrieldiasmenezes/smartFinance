import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "@/components/Logo";
import Tabs from "./Navigation/Tabs";


export default function Index() {
  const [activeScreen, setActiveScreen] = useState("Home");

  return (
    <View style={styles.container}>
      {/* Logo fixo */}
      <Logo />

      {/* Conteúdo da tela ativa */}
      <View style={styles.screenContainer}>
        <Tabs.Screen activeScreen={activeScreen} />
      </View>

      {/* Barra de navegação cilíndrica */}
      <Tabs.Bar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor:"transparent" },
  screenContainer: { flex: 1 },
});
