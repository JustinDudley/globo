import React from "react";
import { Stylesheet, Text, View } from "react-native";

import { Header } from "../sections/Header";

export class Home extends React.Component {
  render() {
    return (
      <View>
        <Header message="Press to Login" />
        <Text>Yot, this will be the Homepage</Text>
        <Text>Okay, so these other lines are here</Text>
        <Text>just and...... so you can see the text in the app</Text>
      </View>
    );
  }
}
