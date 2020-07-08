import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Header } from "../sections/Header";

export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={{ flex: 8 }}>Yot, this will be the Homepage</Text>
        <Text style={{ flex: 6 }}>Okay, so these other lines are here</Text>
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
