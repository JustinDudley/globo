import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "../sections/Header"; // with or without .js
import { Hero } from "../sections/Hero.js";
import { Menu } from "../sections/Menu.js";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Hero />
        <Menu />
        <Text style={{ flex: 6 }}>Leftover text line...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column-reverse",
    // justifyContent: 'center', would have to change child components to fixed sizes
    // alignItems: "center",
  },
});
